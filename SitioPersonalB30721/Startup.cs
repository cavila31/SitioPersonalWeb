using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SitioPersonalB30721.Startup))]
namespace SitioPersonalB30721
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
