using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gol_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneController : ControllerBase
    {
        private IAppAirplane appAirPlane;


        public AirplaneController(IAppAirplane _appAirplane)
        {
            this.appAirPlane = _appAirplane;
        }

        // GET: api/Airplane
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                var airplanes = appAirPlane.List();

                return StatusCode(200, airplanes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // GET: api/Airplane/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult Get(int id)
        {
            try
            {
                var airPlane = appAirPlane.GetEntity(id);
                return StatusCode(200, airPlane);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // POST: api/Airplane
        [HttpPost]
        public ActionResult Post([FromBody]Airplane airplane)
        {
            airplane.CreationDate = DateTime.Now;
            appAirPlane.Add(airplane);
            return StatusCode(200, 1);

        }

        // PUT: api/Airplane/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]Airplane airplane)
        {
            appAirPlane.Update(airplane);
            return StatusCode(200);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var airplane = appAirPlane.GetEntity(id);
            appAirPlane.Delete(airplane);
            return StatusCode(200);
        }
    }
    public class Teste
    {
        public string teste { get; set; }
    }
}
