create database Gol
go
use Gol

go
create table Anuncio(
	Id int primary key identity,
	Model varchar(100),
	QtdPassengers int,
	CreationDate datetime
) 
go 

create procedure CreateAnuncio
(
@Model varchar(100),
@QtdPassengers int,
@CreationDate datetime
)
as
Begin 
Insert into Anuncio (Model
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
select * from Anuncio
end

GO

create procedure UpdateAnuncio
(
@Id int,
@Model varchar(100),
@QtdPassengers int,
@CreationDate datetime
)
as
Begin 
update  Anuncio set Model = @Model,
				     QtdPassengers = @QtdPassengers,
					 @CreationDate = @CreationDate
		
		where Id = @Id
end

GO

create procedure DeleteAnuncio
(
@Id int
)
as
Begin 
delete from  Anuncio where Id = @Id
end

GO

create procedure GetById
(
@Id int
)
as
Begin 
select * from  Anuncio  where Id = @Id
end