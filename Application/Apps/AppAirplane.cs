using Application.Interfaces;
using Domain.Entities;
using Domain.Interfaces.Airplane;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.Apps
{
    public class AppAirplane : IAppAirplane
    {
        IAirplane _IAirPlane;

        public AppAirplane(IAirplane IAirplane)
        {
            _IAirPlane = IAirplane;
        }
        public void Add(Airplane Entity)
        {
            _IAirPlane.Add(Entity);
        }

        public void Delete(Airplane Entity)
        {
            _IAirPlane.Delete(Entity);
        }

        public Airplane GetEntity(int id)
        {
            return _IAirPlane.GetEntity(id);
        }

        public List<Airplane> List()
        {
            return _IAirPlane.List();
        }

        public void Update(Airplane Entity)
        {
            _IAirPlane.Update(Entity);
        }
    }
}
