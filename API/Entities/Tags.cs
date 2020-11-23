using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class Tags
    {

        public Projects Project { get; set; }
        public Guid ProjectId { get; set; }
        public string Tag { get; set; }

    }
}
