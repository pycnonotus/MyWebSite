using System;
using System.Collections;
using System.Collections.Generic;

namespace API.Entities
{
    public class Projects
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ProjectDetails { get; set; }
        public bool MinProject { get; set; } = false;
        public string GitUrl { get; set; }
        public string DemoUrl { get; set; }
        public ICollection<Tags> Tags { get; set; }



    }
}
