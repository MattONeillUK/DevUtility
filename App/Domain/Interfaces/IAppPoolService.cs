using DevUtility.Domain.Models.AppPool;
using DevUtility.Domain.ViewModels;

namespace DevUtility.Domain.Interfaces;

public interface IAppPoolService
{
    DevUtilityViewModel GetViewModel(string? filter);
    AppPoolStateModel? StartAppPoolByName(string siteName);
    AppPoolStateModel? RecycleAppPoolByName(string siteName);
    AppPoolStateModel? StopAppPoolByName(string siteName);
}