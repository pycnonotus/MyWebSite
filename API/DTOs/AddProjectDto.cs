using System.Collections.Generic;

namespace API.DTOs
{
    public class AddProjectDto
    {
        public string Name { get; set; }
        public string ProjectDetails { get; set; }
        public ICollection<string> Tags { get; set; }
        public bool MinProject { get; set; }
        public string GitUrl { get; set; }
        public string DemoUrl { get; set; }
    }
}
