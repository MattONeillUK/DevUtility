using DevUtility.Domain.Models.AppPool;

namespace DevUtility.Domain.ViewModels;

public class DevUtilityViewModel
{
    public IEnumerable<AppPoolModel> AppPools { get; set; }
}