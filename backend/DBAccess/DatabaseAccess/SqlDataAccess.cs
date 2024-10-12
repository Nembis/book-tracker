using System;
using System.Data;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace DBAccess.DatabaseAccess;

public class SqlDataAccess : ISqlDataAccess
{
    private readonly IConfiguration _config;

    public SqlDataAccess(IConfiguration config)
    {
        DefaultTypeMap.MatchNamesWithUnderscores = true;
        _config = config;
    }

    public NpgsqlConnection GetNpgsqlConnection(string connectionId = "Default")
    {
        return new NpgsqlConnection(_config.GetConnectionString(connectionId));
    }

    public async Task<IEnumerable<T>> LoadDataAsync<T, U>(
        string query,
        U parameters,
        string connectionId = "Default")
    {
        using var connection = GetNpgsqlConnection(connectionId);
        return await connection.QueryAsync<T>(query, parameters);
    }

    public async Task SaveDataAsync<T>(
        string query, 
        T parameters, 
        string connectionId ="Default", 
        IDbTransaction? transaction = null)
    {
        if (transaction != null && transaction.Connection != null)
        {
            await transaction.Connection.ExecuteAsync(query, parameters);
        }
        else
        {
            using var connection = GetNpgsqlConnection(connectionId);
            await connection.ExecuteAsync(query, parameters);
        }
    }
}
