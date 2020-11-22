using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUsers : IdentityUser<int>
    {
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public ICollection<AppUserRole> UserRoles { get; set; }

    }
}
