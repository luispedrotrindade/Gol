using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Config
{
    public class ContextBase : DbContext
    {
        public DbSet<Airplane> Airplane { get; set; }

        public ContextBase(DbContextOptions<ContextBase> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(GetConnectionString());
            }
        }

        private string GetConnectionString()
        {
            return @"Server=GMEPN001470\SQLEXPRESS;Database=Gol;Trusted_Connection=True;";
        }
    }
}
