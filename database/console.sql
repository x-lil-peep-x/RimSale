
drop database TireSales;
create database TireSales;
use TireSales;
CREATE TABLE [Rim] (
  [idRim] int IDENTITY (1,1),
  [brand] varchar(20),
  [hoop] varchar(15),
  [price] float,
  [amountAvailable] float,
  [description] varchar(45),
  [active] tinyint,
  PRIMARY KEY ([idRim])
);

CREATE TABLE [detailRimSale] (
  [idDetailRimSale] int IDENTITY (1,1),
  [amount] float,
  [idRim] int,
  [idSaleOrder] int,
  PRIMARY KEY ([idDetailRimSale])
);

CREATE INDEX [FK] ON  [detailRimSale] ([idRim], [idSaleOrder]);

CREATE TABLE [saleOrder] (
  [idSaleOrder] int IDENTITY (1,1),
  [totalAmount] float,
  [totalAmountDiscount] float,
  [date] date,
  [idClient] int,
  [idUser] int,
  PRIMARY KEY ([idSaleOrder])
);

CREATE INDEX [FK] ON  SaleOrder ([idClient], [idUser]);

CREATE TABLE [Client] (
  [idClient] int IDENTITY (1,1),
  [ci] varchar(10),
  [firstName] varchar(15),
  [secondName] varchar(15),
  [lastName] varchar(15),
  [motherLastName] varchar(15),
  [phone] varchar(10),
  [active] tinyint,
  PRIMARY KEY ([idClient])
);

CREATE TABLE [User] (
  [idUser] int IDENTITY (1,1),
  [firstName] varchar(15),
  [secondName] varchar(15),
  [lastName] varchar(15),
  [motherLastName] varchar(15),
  [nick] varchar(45),
  [password] varchar(255),
  [active] tinyint,
  [idRole] int,
  PRIMARY KEY ([idUser])
);

CREATE INDEX [FK] ON  [User] ([idRole]);

CREATE TABLE [Role] (
  [idRole] int IDENTITY (1,1),
  [name] varchar(15),
  PRIMARY KEY ([idRole])
);


