using System;

using Npgsql;
using System.Threading.Tasks;
using System.Collections.Generic;
using API.DTOs;
using System.Linq;
using System.Data;

namespace API.Data
{
    public class OutsideSpyRepository
    {
        public async static Task<IEnumerable<CvDto>> GetCvSpy()
        {
            List<CvDto> retData = new List<CvDto>();
            
            var connString = "Host=localhost;Username=appuser;Password=newPass342;Database=urlshortner";
            await using var conn = new NpgsqlConnection(connString);
            await conn.OpenAsync();
            String sql = "SELECT ip, date, alias, id, info FROM public.\"VISITORS\";";
            await using (var cmd = new NpgsqlCommand(sql, conn))
            await using (var reader = await cmd.ExecuteReaderAsync())
                while (await reader.ReadAsync())
                {
                    var dto = new CvDto
                    {
                        Ip = reader.GetString(0),
                        Date = reader.GetDateTime(1),
                        Alias = reader.GetString(2),
                        Info = reader.IsDBNull(4) ? "" : reader.GetString(4)
                    };
                    retData.Insert(0, dto);
                }
            await conn.CloseAsync();
            return retData;




        }
    }
}
