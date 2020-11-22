using System.Text;
using System.Threading.Tasks;
using API.Entities;
using Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions
{
    public static class IdentityServicesExtensions
    {
        public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddIdentityCore<AppUsers>(
                opt =>
             {
                 opt.Password.RequireNonAlphanumeric = true;
             }
        ).AddRoles<AppRoles>()
            .AddRoleManager<RoleManager<AppRoles>>()
            .AddSignInManager<SignInManager<AppUsers>>()
            .AddRoleValidator<RoleValidator<AppRoles>>()
            .AddEntityFrameworkStores<DataContext>()
            ;
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
                        opt =>
                        {
                            opt.TokenValidationParameters = new TokenValidationParameters
                            {
                                ValidateIssuerSigningKey = true,
                                IssuerSigningKey = new SymmetricSecurityKey(
                                        Encoding.UTF8.GetBytes(
                                            config["TokenKey"]
                                        )
                                    ),
                                ValidateIssuer = false,
                                ValidateAudience = false

                            };
                        }
                        );
            services.AddAuthorization(
    opt =>
 {
     opt.AddPolicy("RequireAdminRole",
             policy => policy.RequireRole("Admin")
     );
     opt.AddPolicy("ModeratePhotoRole",
     policy => policy.RequireRole("Admin", "Moderator")
     );
 }
);

            return services;
        }
    }
}

