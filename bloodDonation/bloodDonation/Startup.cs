using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(bloodDonation.Startup))]
namespace bloodDonation
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
