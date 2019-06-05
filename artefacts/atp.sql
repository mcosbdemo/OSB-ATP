DROP TRIGGER customer_on_insert;
DROP TRIGGER feedback_on_insert;
DROP SEQUENCE customer_seq;
DROP SEQUENCE feedback_seq;
DROP TABLE customer;
DROP TABLE product;
DROP TABLE offers;
DROP TABLE settinz;
DROP TABLE feedback;

CREATE TABLE settinz
( "ID"            NUMBER NOT NULL ENABLE
   , "ANNOY"          VARCHAR2(511)
   , "MBEID"          VARCHAR2(511)
   , "MCSIDDOM"       VARCHAR2(255)
   , "APINAME"        VARCHAR2(255)
   , "APPKEY"         VARCHAR2(511)
   , "SENDERID"       VARCHAR2(511)
   , PRIMARY KEY ("ID")
);

INSERT INTO settinz VALUES
 (1,'R1NFMDAwMTE2NzhfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6Smk3cXBld3lrczlfbmI=',
  '2879cc11-97de-485a-bced-8476b91196f3','gse00011679',
  'LoyaltyManagementAPI','9722de7f-4ecf-443f-8e0e-714b2f6e0f9c','925757644219');

CREATE TABLE product
(	"ID"            NUMBER NOT NULL ENABLE
   ,  "PRODUCTNAME"   VARCHAR2(255 BYTE)
   ,  "PRODUCTPRICE"  NUMBER
   ,  "PRODUCTIMAGE"  VARCHAR2(255 BYTE)
   ,  "PRODUCTDESC"   VARCHAR2(255 BYTE)
   ,  CONSTRAINT      "PRODUCT_PK" PRIMARY KEY ("ID")
 );

CREATE TABLE offers
(	"ID"            NUMBER(*,0) NOT NULL ENABLE
   ,  "OFFERNAME"     VARCHAR2(255 BYTE)
   ,  "POINTS"        NUMBER(*,0)
   ,  "MESSAGE"       VARCHAR2(511 BYTE)
   ,  "PRODUCTID"     NUMBER
   ,  PRIMARY KEY ("ID")
);

CREATE TABLE customer
( "ID"            NUMBER NOT NULL ENABLE
    , "FIRSTNAME"     VARCHAR2(255 BYTE)
    , "SURNAME"       VARCHAR2(255 BYTE)
    , "ADDRESS"       VARCHAR2(255 BYTE)
    , "CARDNUM"       VARCHAR2(255 BYTE)
    , "POINTS"        NUMBER(*,0)
    , "COUPONS"       NUMBER(*,0)
    , "UNAME"         VARCHAR2(255 BYTE)
    , "PASSWORD"      VARCHAR2(255 BYTE) DEFAULT 'Oracle123'
    ,                 PRIMARY KEY ("ID")
);

CREATE TABLE feedback
( "ID"           NUMBER NOT NULL
  , "FIRSTNAME"     VARCHAR2(255 BYTE)
  , "SURNAME"       VARCHAR2(255 BYTE)
  , "CUSTOMEREMAIL" VARCHAR2(255)
  , "WHATTYPE"      VARCHAR2(255)
  , "FEEDBACK"      VARCHAR2(2000)
  , CONSTRAINT FEEDBACK_PK PRIMARY KEY ("ID") ENABLE
);

create sequence customer_seq increment by 1 start with 50001 maxvalue 99999 nocycle;
create sequence feedback_seq increment by 1 start with 10001 maxvalue 99999 nocycle;

Insert into OFFERS (ID,OFFERNAME,POINTS,MESSAGE,PRODUCTID) values (10001,'Our new aroma roast',10000,'Try special brew today and enjoy 10% off with 10,000 points',20001);
Insert into OFFERS (ID,OFFERNAME,POINTS,MESSAGE,PRODUCTID) values (10002,'Fresh brewed everyday',20000,'Purchase special brew between 3-5pm and receive 20% off with 20,000 points',20002);
Insert into OFFERS (ID,OFFERNAME,POINTS,MESSAGE,PRODUCTID) values (10003,'Upgrade your iced coffee',5000,'Stop in today and treat yourself to an upgraded iced coffee with 5,000 points',20003);

Insert into PRODUCT (ID,PRODUCTNAME,PRODUCTPRICE,PRODUCTIMAGE,PRODUCTDESC) values (20001,'Aroma Beans',21,'20001.jpg','Blend of incomparable Balance of sweetness, aroma and body. Composed of 50% Arabica and 50% Robusta.');
Insert into PRODUCT (ID,PRODUCTNAME,PRODUCTPRICE,PRODUCTIMAGE,PRODUCTDESC) values (20002,'Valentine',20,'20002.jpg','Specialty coffee roasted in small batches by people who care. The specialty part means we only choose to roast top-tier, rigorously-graded, traceable coffees.');
Insert into PRODUCT (ID,PRODUCTNAME,PRODUCTPRICE,PRODUCTIMAGE,PRODUCTDESC) values (20003,'Coffee Break',15,'20003.jpg','Celebrates the rich flavor of espresso. It is a simple drink, yet we prepare it with care. Baristas pour two espresso shots, and then quickly pour hot water over the top to produce a light layer of crema.');
Insert into PRODUCT (ID,PRODUCTNAME,PRODUCTPRICE,PRODUCTIMAGE,PRODUCTDESC) values (20004,'Festival Blend',5,'20004.jpg','Tea x Coffee blend combining high quality Uji tea and tasty coffee beans to appear at food festival Taste of Paris');

INSERT into CUSTOMER values (30001,'Lisa','Jones','64 Church Crescent, Whetstone, UK','1111222233334444',1,6,'lisa.jones','Oracle123');
INSERT into CUSTOMER values (30002,'Bala','Gupta','15 Church Way, Whetstone, UK','1111222233334445',2,10,'bala.gupta','Oracle123');
INSERT into CUSTOMER values (30003,'Roland','Dubois','2 Church Way, Whetstone, UK','1111222233334446',0,2,'roland.dubois','Oracle123');
INSERT into CUSTOMER values (30004,'Joe','Blog','Buckingham Palace, The Mall, London, UK','1111222233334447',0,4,'user@email.com','Oracle123');
INSERT into CUSTOMER values (40000,'Milton','Caldwell','30 St James Avenue, London, UK','1111222233334448',0,2,'cloud.admin','Oracle123');
INSERT into CUSTOMER values (40001,'Robert','Ellis','Clarence House, Cleverland Row, London, UK','1111222233334449',1,3,'demo','Oracle123');
INSERT into CUSTOMER values (40002,'Josephine','Mendez','1 Coventry Street, London, UK','1111222233334450',2,2,'demo@oracle.com','Oracle123');
INSERT into CUSTOMER values (40003,'Hattie','Mason','8 Shaftesbury Avenue, London, UK','1111222233334451',0,4,'demo@demo.com','Oracle123');
INSERT into CUSTOMER values (40004,'Harry','Thornton','3 Frognal, Hampstead, UK','1111222233334452',1,4,'oracle@oracle.com','Oracle123');
INSERT into CUSTOMER values (40005,'Adeline','Flores','18 Holly Hill, Hampstead, UK','1111222233334453',2,48,'oracle','Oracle123');
INSERT into CUSTOMER values (40006,'Patrick','Rowe','145 Finchley Road, Golders Green','1111222233334454',0,13,'weblogic','Oracle123');
INSERT into CUSTOMER values (40007,'Daniel','Reese','212 Camden High Street, Camden Town, UK','1111222233334455',1,19,'roktizawa@ic.edu','Oracle123');
INSERT into CUSTOMER values (40008,'Tillie','Allison','11 Harmood Street, Camden Town, UK','1111222233334456',2,4,'bocno@zegwifa.io','Oracle123');
INSERT into CUSTOMER values (40009,'Nettie','Ortiz','60 Prince of Wales Road, Chalk Farm, UK','1111222233334457',0,16,'uc@kojpeg.gov','Oracle123');
INSERT into CUSTOMER values (40010,'Joseph','Higgins','134 Haverstock Hill, Belsize Park, UK','1111222233334458',1,11,'hog@pifu.com','Oracle123');
INSERT into CUSTOMER values (40011,'Jane','Luna','50 Mansfield Road, Kentish Town, UK','1111222233334459',2,14,'oz@kazbap.io','Oracle123');
INSERT into CUSTOMER values (40012,'Bettie','Snyder','39 Parliment Hill, Hampstead Heath, UK','1111222233334460',0,0,'zu@ti.com','Oracle123');
INSERT into CUSTOMER values (40013,'Seth','Vasquez','1 Heath Street, Hampstead, UK','1111222233334461',1,17,'ja@sevuvku.io','Oracle123');
INSERT into CUSTOMER values (40014,'Millie','Reynolds','9 Spaniards Road, Hampstead Heath, UK','1111222233334462',2,32,'ideapeiv@li.gov','Oracle123');
INSERT into CUSTOMER values (40015,'Steve','Schmidt','8 The Bishops Avenue, Hampstead Garden Suburb, UK','1111222233334463',0,20,'pisgohsu@jat.com','Oracle123');
INSERT into CUSTOMER values (40016,'Phoebe','Martin','301 High Road, East Finchley, UK','1111222233334464',1,12,'sir@nedku.co.uk','Oracle123');
INSERT into CUSTOMER values (40017,'Thomas','Ortiz','500 Regents Park Road, Finchley, UK','1111222233334465',2,21,'icwuw@ru.io','Oracle123');
INSERT into CUSTOMER values (40018,'Mabelle','Tyler','66 Ballards Lane, Church End, UK','1111222233334466',0,15,'wacsa@vodsa.org','Oracle123');
INSERT into CUSTOMER values (40019,'Brian','Sutton','111 Nether Street, West Finchley, UK','1111222233334467',1,13,'agsu@ineloh.edu','Oracle123');
INSERT into CUSTOMER values (40020,'May','Manning','272 Woodhouse Road, North Finchley, UK','1111222233334468',2,17,'awomo@iwo.io','Oracle123');
INSERT into CUSTOMER values (40021,'Alvin','Hanson','678 High Road, North Fincley, UK','1111222233334469',0,5,'wi@mugvevcal.edu','Oracle123');
INSERT into CUSTOMER values (40022,'Christine','Sanders','18 Woodside Avneue, Woodside Park, UK','1111222233334470',1,20,'faczug@ufolobi.edu','Oracle123');
INSERT into CUSTOMER values (40023,'Minerva','Graham','140 Friary Road, North Finchley, UK','1111222233334471',2,26,'tezam@guf.net','Oracle123');
INSERT into CUSTOMER values (40024,'Lilly','Dixon','321 Frien Barnet Lane, Frien Barnet, UK','1111222233334472',0,39,'fufe@wutonhuf.org','Oracle123');
INSERT into CUSTOMER values (40025,'Richard','Peters','234 Oakleigh Road North, Oakleigh Park, UK','1111222233334473',1,13,'hanevo@fu.edu','Oracle123');
INSERT into CUSTOMER values (40026,'Henrietta','Carson','7 Russell Lane, Oakeigh Park, UK','1111222233334474',2,28,'becwoppa@mina.io','Oracle123');
INSERT into CUSTOMER values (40027,'Sean','Oliver','82 Osidge Lane Brunswick Park, UK','1111222233334475',0,30,'big@sud.net','Oracle123');
INSERT into CUSTOMER values (40028,'Emilie','McGuire','69 Totteridge Lane, Totteridge, UK','1111222233334476',1,38,'omen@as.org','Oracle123');
INSERT into CUSTOMER values (40029,'Edna','Bishop','111 High Road, Whetstone, UK','1111222233334477',2,46,'meuc@vocme.edu','Oracle123');
INSERT into CUSTOMER values (40030,'Pearl','Morgan','32 Totteridge Commons, Totteridge, UK','1111222233334478',0,9,'ofafe@vane.net','Oracle123');
INSERT into CUSTOMER values (40031,'Johnny','Murphy','401 Barnet Hill, High Barnet, UK','1111222233334478',1,30,'wimesle@jis.co.uk','Oracle123');
INSERT into CUSTOMER values (40032,'Dollie','Lawrence','505 St Albans Road, High Barnet, UK','1111222233334479',2,2,'dutma@heuj.org','Oracle123');
INSERT into CUSTOMER values (40033,'Theodore','Tucker','33 Barnet Road, Arkley, UK','1111222233334480',0,1,'piz@jeka.io','Oracle123');
INSERT into CUSTOMER values (40034,'Lora','Rose','1 Cheldon Avenue, Mill Hill, UK','1111222233334481',1,30,'tedlem@tepteato.org','Oracle123');
INSERT into CUSTOMER values (40035,'Lois','Wright','40 Hendale Avenue, Hendon, UK','1111222233334482',2,4,'aca@vudembed.co.uk','Oracle123');
INSERT into CUSTOMER values (40036,'Elijah','McKinney','2 Thonrey Close, Colindale, UK','1111222233334483',0,8,'zinbeir@negjolek.gov','Oracle123');
INSERT into CUSTOMER values (40037,'Michael','Thomas','77 Aerodrome Road, Colindale, UK','1111222233334484',1,4,'tamipup@kajho.co.uk','Oracle123');
INSERT into CUSTOMER values (40038,'Rosalie','Jenkins','93 Colindale Avenue, Colindale, UK','1111222233334485',2,5,'dod@hethiimi.org','Oracle123');
INSERT into CUSTOMER values (40039,'Theresa','Moran','345 Edgware Road, Edgware, UK','1111222233334486',0,1,'ma@zamego.edu','Oracle123');
INSERT into CUSTOMER values (40040,'Gertrude','Stone','88 Pinner Hill Road, Pinner, UK','1111222233334487',1,0,'unigakwi@pu.co.uk','Oracle123');
INSERT into CUSTOMER values (40041,'Mae','Pearson',' 777 Uxbridge Road, Stanmore, UK','1111222233334488',2,0,'tisniha@nadlit.edu','Oracle123');
INSERT into CUSTOMER values (40042,'Belle','Curry','4 The Avenue, Hatch End, UK','1111222233334489',0,4,'iroitacet@hizholpo.gov','Oracle123');
INSERT into CUSTOMER values (40043,'Stella','Weaver','156 St Thomas Drive, Harrow, UK','1111222233334490',1,3,'owifofwow@etocu.com','Oracle123');
INSERT into CUSTOMER values (40044,'Thomas','Carson','241 Elstree Way, Borehamwood, UK','1111222233334491',2,0,'ob@awugol.gov','Oracle123');
INSERT into CUSTOMER values (40045,'Jim','Francis','67 Cockfosters Road, Cockfosters, UK','1111222233334492',0,3,'bafi@jowiw.co.uk','Oracle123');
INSERT into CUSTOMER values (40046,'Sara','Delgado','99 Chase Road, Oakwood, UK','1111222233334493',1,5,'ijpes@kad.net','Oracle123');
INSERT into CUSTOMER values (40047,'Hunter','Stephens','11 Chase Green Avenue, Endfield, UK','1111222233334494',2,0,'dabes@efubi.co.uk','Oracle123');
INSERT into CUSTOMER values (40048,'Harvey','65 The Ridgeway, Enfield, UK','Reeves','1111222233334495',0,1,'zu@saju.com','Oracle123');
INSERT into CUSTOMER values (40049,'Paul','Vega','33 Hadley Road, Chase Farm, UK','1111222233334496',1,3,'tavezvi@aluole.edu','Oracle123');
INSERT into CUSTOMER values (40050,'Todd','Warner','10 Cattlegate Road, Crews Hill, UK','1111222233334497',2,5,'pijekafah@johpoaje.edu','Oracle123');

COMMIT;

CREATE or REPLACE TRIGGER customer_on_insert
  BEFORE INSERT ON customer
  FOR EACH ROW
BEGIN
  SELECT customer_seq.nextval
  INTO :new.ID
  FROM DUAL;
END;

/

CREATE or REPLACE TRIGGER feedback_on_insert
  BEFORE INSERT ON feedback
  FOR EACH ROW
BEGIN
  SELECT feedback_seq.nextval
  INTO :new.ID
  FROM DUAL;
END;
