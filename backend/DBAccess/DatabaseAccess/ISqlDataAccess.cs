using System;
using System.Data;
using Npgsql;

namespace DBAccess.DatabaseAccess;

public interface ISqlDataAccess 
{
    NpgsqlConnection GetNpgsqlConnection(string connectionId = "Default");
    Task<IEnumerable<T>> LoadDataAsync<T, U>(
        string query,
        U parameters,
        string connectionId = "Default");
    Task SaveDataAsync<T>(
        string query, 
        T parameters, 
        string connectionId ="Default", 
        IDbTransaction? transaction = null);
}
