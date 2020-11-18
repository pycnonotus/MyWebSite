using System;

namespace Entities
{
    public class SpyInfo
    {
        public Guid Id { get; set; }
        public DateTime RequestDate { get; set; } = DateTime.UtcNow;
        public string Ip { get; set; }
                
    }
}
