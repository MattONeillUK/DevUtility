using AutoMapper;
using DevUtility.Domain.Models.AppPool;
using Microsoft.Web.Administration;

namespace DevUtility.Domain.Profiles.AppPool;

public class AppPoolStateProfile : Profile
{
    public AppPoolStateProfile()
    {
        CreateMap<ObjectState, AppPoolStateModel>().ForMember(d => d.State,
            op => op.MapFrom(o => o));
    }
}