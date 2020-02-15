using Domain.Interfaces.Airplane;
using Infra.Config;
using Infra.Repository.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Infra.Repository.Airplane
{
    public class RepositoryAirplane : RepositoryGeneric<Domain.Entities.Airplane>, IAirplane
    {
        private readonly DbContextOptionsBuilder<ContextBase> _OptionsBuider;
        public RepositoryAirplane()
        {
            _OptionsBuider = new DbContextOptionsBuilder<ContextBase>();
        }


        public void Add(Domain.Entities.Airplane Entity)
        {
            using (var db = new ContextBase(_OptionsBuider.Options))
            {
                var model = new SqlParameter("@Model", Entity.Model);
                var qtdPassengers = new SqlParameter("@QtdPassengers", Entity.QtdPassengers);
                var creationDate = new SqlParameter("@CreationDate", Entity.CreationDate);
                db.Database.ExecuteSqlCommand("CreateAirplane @Model, @QtdPassengers, @CreationDate", model, qtdPassengers, creationDate);
                db.SaveChanges();
            }
        }

        public void Update(Domain.Entities.Airplane Entity)
        {
            using (var db = new ContextBase(_OptionsBuider.Options))
            {
                var model = new SqlParameter("@Model", Entity.Model);
                var qtdPassengers = new SqlParameter("@QtdPassengers", Entity.QtdPassengers);
                var creationDate = new SqlParameter("@CreationDate", Entity.CreationDate);
                db.Database.ExecuteSqlCommand("UpdateAirplane @Model, @QtdPassengers, @CreationDate", model, qtdPassengers, creationDate);
                db.SaveChanges();
            }
        }

        public void Delete(Domain.Entities.Airplane Entity)
        {
            using (var db = new ContextBase(_OptionsBuider.Options))
            {
                var param = new SqlParameter("@Id", Entity.Id);
                db.Database.ExecuteSqlCommand("DeleteAirplane @Id", param);
                db.SaveChanges();
            }
        }

        public List<Domain.Entities.Airplane> List()
        {
            using (var db = new ContextBase(_OptionsBuider.Options))
            {
                return db.Airplane.FromSqlRaw("ListAll").ToList();
            }
        }

        public Domain.Entities.Airplane GetEntity(int Id)
        {
            using (var db = new ContextBase(_OptionsBuider.Options))
            {
                var param = new SqlParameter("@Id", Id);
                var airplanes = db.Airplane.FromSqlRaw("GetById @Id", param).ToList();
                return airplanes[0];
            }
        }
    }
}
