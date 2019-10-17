# Cloud Native Development with Oracle AppDev Platform
## Automating your build pipeline with Open Service Broker and Oracle Autonomous Database


## Introduction

This project contains the install guide and artefacts required to create a continuous integration and continuous delivery pipeline for a cloud native application using Oracle AppDev Platform. This project also contains a working sample application with the YAMLs configured correctly to run out of the box.

You will be able to appreciate and experience how to use Oracle Cloud Services to implement cloud native applications with a sample application based on a coffee shop loyalty rewards system.

The application CafeSupremo is written in Node.js and runs in a Docker container hosted in a Kubernetes cluster. CafeSupremo allows a user to collect loyalty reward points and redeem a free cup of coffee once the user has collected enough points. The user's account balance is stored in an Oracle Autonomous Transaction Processing (ATP) database.

You will be creating the CI/CD pipelines with Oracle Container Pipeline (Wercker) to build and deploy your sample application to Oracle Container Engine for Kubernetes.

We will be using the OCI Service Broker to simplify the management and provisioning of ATP. The OCI Service Broker is an open source implementation of Open Service Broker API Spec for OCI services. Service Broker manage the lifecycle of services such as ATP, ADW, Storage to provision, get access to and manage the services they offer. The Open Service Broker API defines these interactions, and therefore allows software providers to offer their services to anyone, regardless of the technology or infrastructure those software providers wish to utilise. The OCI Service Broker is to be installed in Oracle Container Engine for Kubernetes or in other Kubernetes clusters.


## CI/CD Hands On Lab

This hands on lab requires about 3 hours to complete. It provide a hands on experience in setting up the complete end-to-end CI/CD pipeline on Oracle Cloud Platform.

### Prerequisite

It is assumed that you have accounts in the following communities:

* An Oracle Cloud account
* A Github account
* A Docker Hub account
* A Wercker account

### Tasks Overview

At a high level you will be performing the following tasks:

1. Create an OKE cluster on Oracle Cloud Infrastructure
2. Download your OKE cluster Kubeconfig file
3. Install OCI Service Broker in OKE cluster
4. Create an ATP instance through OSB
5. Download ATP wallet into OKE cluster
6. Examine your Kubernetes with Kubernetes Dashboard
7. Create schema and populate with data
8. Fork from Github reference repository
9. Create Wercker project
10. Create Wercker pipelines
11. Execute your CI/CD pipeline
12. Test your application



## Create an OKE cluster on Oracle Cloud Infrastructure

#### **STEP 1**: Sign Into The Oracle Cloud Service Account

- Sign into your Oracle Cloud Service account -> [OCI Console](https://console.us-ashburn-1.oraclecloud.com/#/a/)

#### **STEP 2**: Create an OKE Cluster on OCI

- In the Console, open the navigation menu. Under Solutions and Platform, go to **Developer Services** and click **Container Clusters**.

- To create a cluster, you must either belong to the tenancy's Administrators group, or belong to a group to which a policy grants the CLUSTER_MANAGE permission. In addition, a policy in the root compartment must grant Container Engine for Kubernetes access to all resources in the tenancy.

- Check if you already have a policy with the `allow service OKE to manage all-resources in tenancy` statement. If you do, then you can go create a cluster.

- Otherwise, follow the documentation to create your policy -> [Create policy](https://docs.cloud.oracle.com/iaas/Content/ContEng/Concepts/contengpolicyconfig.htm#PolicyPrerequisitesGroups)

- Select **Create Cluster** with the **Quick Cluster** default options.

- The default will create a node pool with three worker nodes, one in each AD. The subnet for each AD will be created automatically for you by default.


## Download your OKE cluster Kubeconfig file

#### **STEP 3**: Install and Configure OCI CLI

- To download the Kubeconfig file you will need to have installed the OCI CLI. If you don't have it installed already you can follow the instruction here -> [Install and Configure the OCI CLI](https://docs.cloud.oracle.com/iaas/Content/API/SDKDocs/cliinstall.htm)

- Please note if you're using MS Windows, it is best to use PowerShell. Otherwise for Linux or Mac OSX, just open a terminal.


#### **STEP 4**: Download The Kubeconfig File

- Follow the instruction to -> [Download Kubeconfig](https://docs.cloud.oracle.com/iaas/Content/ContEng/Tasks/contengdownloadkubeconfigfile.htm)

- Or click on the **Access Kubeconfig** button on the cluster page. Copy and paste the command to download the kubeconfig file.

  `oci ce cluster create-kubeconfig --cluster-id ocid1.cluster.oc1.phx.aaaaaaaaafstentggvsdenzrmyztkmrvga2dszlfmq3tayjwgc3dcobtmmyt --file $HOME/.kube/config --region us-phoenix-1 --token-version 2.0.0`

  You may to to replace the token-version from 2.0.0 to 1.0.0 as below

  `oci ce cluster create-kubeconfig --cluster-id ocid1.cluster.oc1.phx.aaaaaaaaafstentggvsdenzrmyztkmrvga2dszlfmq3tayjwgc3dcobtmmyt --file $HOME/.kube/config --region us-phoenix-1 --token-version 1.0.0 `

- Once downloaded your Kubeconfig file, you will need to set your `KUBECONFIG` environment variable to point to the location of your Kubeconfig file.


#### **STEP 5**: Start The Kubernetes Dashboard

- Start your Kubenetes Proxy with the `kubectl proxy` command in a terminal.

- Now open your Kubernetes Dashboard -> [Dashboard](http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/)


## Install OCI Service Broker in OKE cluster

There are two steps to installing and configuring the Service Broker:

1. To install the OCI Service broker
2. To add ATP as a managed service via the OCI Service broker


#### **STEP 6**: Installing the OCI Service Broker

- To install the OCI Service Broker follow the instruction at -> [oci-service-broker](https://github.com/oracle/oci-service-broker/blob/master/charts/oci-service-broker/docs/installation.md)

- Read the pre-requisites

- Install the Service Catalogue from helm repository with the commands:
  - `helm repo add svc-cat https://svc-catalog-charts.storage.googleapis.com`
  - `helm install svc-cat/catalog --timeout 300 --name catalog`


- Install the **svcat** tool with the command if you're using MacOS:
  - `brew update && brew install kubernetes-service-catalog-client`


- Deploy the OCI Service Broker which is packaged as a Helm chart for making it easy to install in Kubernetes. You can download the chart from:

  - `https://github.com/oracle/oci-service-broker/releases/download/v1.3.0/oci-service-broker-1.3.0.tgz`


- Collect your user OCI credentials required by Service Broker to provision and manage services/resources in your user tenancy.

- Create OCI secret by name `ocicredentials` (Replace values with your user credentials)

  `kubectl create secret generic ocicredentials \
    --from-literal=tenancy=<CUSTOMER_TENANCY_OCID> \
    --from-literal=user=<USER_OCID> \
    --from-literal=fingerprint=<USER_PUBLIC_API_KEY_FINGERPRINT> \
    --from-literal=region=<USER_OCI_REGION> \
    --from-literal=passphrase=<PASSPHRASE_STRING> \
    --from-file=privatekey=<PATH_OF_USER_PRIVATE_API_KEY>`


#### **STEP 7**: Register RBAC Permissions and Register OCI Service Broker

- Follow the **Quick Setup** instruction for quickly testing out OCI Service Broker.

- Under the **Quick Setup** run the Helm commands with the OCI credentials you collected previously to install OCI Service Broker chart.

  `helm install https://github.com/oracle/oci-service-broker/releases/download/v1.3.1/oci-service-broker-1.3.1.tgz  --name oci-service-broker \
    --set ociCredentials.secretName=ocicredentials \
    --set storage.etcd.useEmbedded=true \
    --set tls.enabled=false`


- Using Helm install from the charts directory in master branch. Please use below command.

  `helm install charts/oci-service-broker/.  --name oci-service-broker \
    --set ociCredentials.secretName=ocicredentials \
    --set storage.etcd.useEmbedded=true \
    --set tls.enabled=false`


- Skip the next sections on **Recommended Setup**


- Continue to **RBAC** section and follow the instruction to create **RBAC Permissions for registering OCI Service Broker**. Enter the following command and replace `<USER_ID>` with yours.

  - `kubectl create clusterrolebinding cluster-admin-brokers --clusterrole=cluster-admin --user=<USER_ID>`


- Now **Register OCI Service Broker**

- You may have to replace the namespace in `oci-service-broker/samples/oci-service-broker.yaml` with default. `default` is the default namespace where your OCI Service Broker is deployed.

- Once you have registered you Service Broker, you can check the service list and plans available through this broker.

- You have completed the installation of the Service Broker.

- Skip the **Monitoring OCI Service Broker** section.



## Create an ATP Instance Through OSB

#### **STEP 8**: Add ATP as a Managed Service to Service broker

- Follow the instruction to add an ATP service to OSB -> [ATP Service](https://github.com/oracle/oci-service-broker/blob/master/charts/oci-service-broker/docs/atp.md#autonomous-transaction-processing-service)

- Check that you have the correct **OCI User Permission requirement**. You should have the policy:
  - `Allow group <SERVICE_BROKER_GROUP> to manage autonomous-database in compartment <COMPARTMENT_NAME>`


- Follow the instruction to **Provision a new ATP Instance** with the details collected from your tenancy.

- Skip the section on **Using an Existing ATP Service Instance**

- Follow the **Service Binding Request Parameters**

- Follow the **Service Binding Response Credentials**

- Create a new ATP instance with the command:

  - `kubectl create -f charts/oci-service-broker/samples/atp/atp-instance-plain.yaml`


## Download ATP wallet into OKE cluster

#### **STEP 9**: Create Binding

- Follow the instruction under the section **Binding** to create binding (aka download your ATP wallet) with the command:

  - `kubectl create -f charts/oci-service-broker/samples/atp/atp-binding-plain.yaml`


- Verify your binding status (wallet) with the `svcat get bindings`.

- You can review the section on **Injecting credentials and configurations** to understand how your application can access the downloaded wallet as a secret in your Kubernetes cluster. However, a working `wercker.yml` has been created for you.


## Examine your Kubernetes with Kubernetes Dashboard

#### **STEP 10**: Review Your Kubernetes Cluster

- Now is a good time to examine your Kubernetes cluster with Kubernetes Dashboard.

- Under the `Secrets` section in the `default` namespace, you will find your newly downloaded binding (wallet) and ATP credential. Click into these secrets to see more detail. The content of the binding should be exactly like the content of your ATP wallet.



## Create Schema and Populate with Data

Now is a good time to create your customer schama and populate it with data. The SQLs to create the schemas and data are created for you already in this project. They are stored in `artefacts/atp.sql`.

#### **STEP 11**: Create Your Schema

- Use your favourite SQL client to connect to ATP. This can be SQL Developer or the SQL Developer Web a web based integrated development environment for ATP.



## Create Your Own Github Project/Repo

#### **STEP 12**: Clone or Fork This project

- To create your Wercker project you will need to link it with your Github repository. The CafeSupremo code is available under this project. You can either clone it or fork it to create your own repository.

  - `https://github.com/mcosbdemo/OSB-ATP`


- You will now work from your own repository.


## Create Wercker Project and Pipelines

#### **STEP 13**: Create Wercker Project/application

- Create a new Application (project) in Wercker and link it with your newly forked Github repository.


#### **STEP 14**: Create Wercker Pipelines

There are actually two workflows in the existing `wercker.yml` file. We will just focus on building the application workflow. The application workflow uses two pipelines; `build-app` and `deploy-to-cluster`.

- By default the `build` pipeline is created for you. Rename this to `build-app`.

- Create new pipeline for `deploy-to-cluster`

- Create workflow to connect `build-app` and `deploy-to-cluster` together.


#### **STEP 15**: Define your Wercker Environment variables

- Create the environment variables below and complete with their values:

  - `KUBERNETES_MASTER`
  - `KUBERNETES_TOKEN`
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`
  - `DOCKER_REPO`
  - `DOCKER_REGISTRY`



## Execute Your CI/CD Pipelines

#### **STEP 16**: Test Your pipelines

The build should take the CafeSupremo code from your repository and build from the steps specified in your `wercker.yml` file. The steps are predefined and you should see the progress of the steps during the pipeline execution.

- Execute the `build-app` pipeline and review any errors.

- If successful, it will trigger the `deploy-to-cluster` pipeline


#### **STEP 17**: Verfiy Your Deployment

- Check Your Kubernetes Dashboard to see if CafeSupremo has been deployed and whether a loadbalancer has been created for you.



## Test Your CI/CD Pipeline and application

You can test the CI/CD automation by making code changes. After committing the changes into your repository, it will automatically trigger the `build-app` pipeline. To test the pipeline, it is recommended that you change the `config.json`
file to see the pipeline in action.


#### **STEP 18**: Making a Code Commit

- Go to `src/js/config/config.js`

- Change the value for `rewardsEnabled:` from `false` to `true` or vice versa.

- Save and commit the change.

- Monitor your pipeline and see the new build being deployed to clusters

- Verify the newly deployed CafeSupremo app by reloading your app in your browser. And check whether you can now login with the default user name `user@email.com`. Password is `Oracle123`.

- If you can login and access your account, then you have successfully connected to ATP and its schema.


## Congratulation !
