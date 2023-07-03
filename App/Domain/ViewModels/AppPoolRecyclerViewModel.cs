using DevUtility.Domain.Models.AppPool;

namespace DevUtility.Domain.ViewModels;

public sealed record DevUtilityViewModel(
    string? FilterQuery,
    IEnumerable<AppPoolModel> AppPools
    );
