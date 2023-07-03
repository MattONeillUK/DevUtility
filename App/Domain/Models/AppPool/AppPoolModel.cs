namespace DevUtility.Domain.Models.AppPool;

public sealed class AppPoolModel
{
    public string Name { get; set; }
    public string State { get; set; }
    public bool IsStopped { get; set; }
}