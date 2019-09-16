drop database TireSales;
create database TireSales;
use TireSales;
CREATE TABLE [Client] (
  [id] int IDENTITY (1,1),
  [ci] varchar(10),
  [firstName] varchar(15),
  [secondName] varchar(15),
  [lastName] varchar(15),
  [motherLastName] varchar(15),
  [phone] varchar(10),
  [active] tinyint,
  PRIMARY KEY ([id])
);
CREATE TABLE [Role] (
  [id] int IDENTITY (1,1),
  [name] varchar(15),
  PRIMARY KEY ([id])
);

CREATE TABLE [User] (
  [id] int IDENTITY (1,1),
  [firstName] varchar(15),
  [secondName] varchar(15),
  [lastName] varchar(15),
  [motherLastName] varchar(15),
  [nick] varchar(45),
  [password] varchar(255),
  [active] tinyint,
  [roleId] int FOREIGN KEY REFERENCES Role(id),
  PRIMARY KEY ([id])
);

CREATE TABLE [Rim] (
  [id] int IDENTITY (1,1),
  [brand] varchar(20),
  [hoop] varchar(15),
  [price] float,
  [amountAvailable] float,
  [description] varchar(45),
  [active] tinyint,
  PRIMARY KEY ([id])
);

CREATE TABLE [SaleOrder] (
  [id] int IDENTITY (1,1),
  [totalAmount] float,
  [totalAmountDiscount] float,
  [date] date,
  [clientId] int FOREIGN KEY REFERENCES [Client](id),
  [userId] int FOREIGN KEY REFERENCES [User](id),
  PRIMARY KEY ([id])
);
CREATE TABLE [DetailRimSale] (
  [id] int IDENTITY (1,1),
  [amount] float,
  [rimId] int FOREIGN KEY REFERENCES Rim(id),
  [saleOrderId] int FOREIGN KEY REFERENCES [SaleOrder](id),
  PRIMARY KEY ([id])
);












