using AutoMapper;
using DevUtility.Domain.Interfaces;
using DevUtility.Domain.Models.AppPool;
using DevUtility.Domain.ViewModels;
using Microsoft.Web.Administration;

namespace DevUtility.Business.Services;

public class AppPoolService : IAppPoolService
{
    private readonly IMapper _mapper;

    public AppPoolService(IMapper mapper)
    {
        _mapper = mapper;
    }

    public DevUtilityViewModel GetViewModel()
    {
        var result = new DevUtilityViewModel
        {
            AppPools = GetAppPools()
        };

        return result;
    }

    public AppPoolStateModel? RecycleAppPoolByName(string siteName)
    {
        try
        {
            var iisManager = new ServerManager();
            var appPool = iisManager.ApplicationPools[siteName];

            if (appPool == null)
            {
                return null;
            }

            if (appPool.State != ObjectState.Started)
            {
                return _mapper.Map<AppPoolStateModel>(appPool.State);
            }

            var state = appPool.Recycle();

            return _mapper.Map<AppPoolStateModel>(state);

        }
        catch (Exception e)
        {
            // todo logging
            return null;
        }

    }

    public AppPoolStateModel? StartAppPoolByName(string siteName)
    {
        try
        {
            var iisManager = new ServerManager();
            var appPool = iisManager.ApplicationPools[siteName];

            if (appPool == null)
            {
                return null;
            }

            if (appPool.State != ObjectState.Stopped)
            {
                return _mapper.Map<AppPoolStateModel>(appPool.State);
            }

            var state = appPool.Start();

            return _mapper.Map<AppPoolStateModel>(state);

        }
        catch (Exception e)
        {
            // todo logging
            return null;
        }

    }

    public AppPoolStateModel? StopAppPoolByName(string siteName)
    {
        try
        {
            var iisManager = new ServerManager();
            var appPool = iisManager.ApplicationPools[siteName];

            if (appPool == null)
            {
                return null;
            }

            if (appPool.State != ObjectState.Started)
            {
                return _mapper.Map<AppPoolStateModel>(appPool.State);
            }

            var state = appPool.Stop();

            return _mapper.Map<AppPoolStateModel>(state);

        }
        catch (Exception e)
        {
            // todo logging
            return null;
        }

    }

    private static IEnumerable<AppPoolModel> GetAppPools()
    {
        var iisManager = new ServerManager();

        var sites = iisManager.ApplicationPools;

        return sites.Select(site => new AppPoolModel
        {
            Name = site.Name,
            IsStopped = site.State is ObjectState.Stopped or ObjectState.Stopping
        });
    }
}
