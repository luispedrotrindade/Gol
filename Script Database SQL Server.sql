create database Gol
go
use Gol

go
create table Airplane(
	Id int primary key identity,
	Model varchar(100),
	QtdPassengers int,
	CreationDate datetime
) 
go 

create procedure CreateAirplane
(
@Model varchar(100),
@QtdPassengers int,
@CreationDate datetime
)
as
Begin 
Insert into Airplane (Model
					 ,QtdPassengers
					 ,CreationDate)
	           values(@Model
					 ,@QtdPassengers
					 ,@CreationDate)
end

go 

create procedure ListAll
as
Begin
select * from Airplane
end

GO

create procedure UpdateAirplane
(
@Id int,
@Model varchar(100),
@QtdPassengers int,
@CreationDate datetime
)
as
Begin 
update  Airplane set Model = @Model,
				     QtdPassengers = @QtdPassengers,
					 @CreationDate = @CreationDate
		
		where Id = @Id
end

GO

create procedure DeleteAirplane
(
@Id int
)
as
Begin 
delete from  Airplane where Id = @Id
end

GO

create procedure GetById
(
@Id int
)
as
Begin 
select * from  Airplane  where Id = @Id
end