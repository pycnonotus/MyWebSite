using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace API.Migrations
{
    public partial class AddProjectTagsFixa2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tags_Projects_ProjectsId",
                table: "Tags");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tags",
                table: "Tags");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Tags");

            migrationBuilder.RenameColumn(
                name: "ProjectsId",
                table: "Tags",
                newName: "ProjectId");

            migrationBuilder.AlterColumn<string>(
                name: "Tag",
                table: "Tags",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tags",
                table: "Tags",
                columns: new[] { "Tag", "ProjectId" });

            migrationBuilder.CreateIndex(
                name: "IX_Tags_ProjectId",
                table: "Tags",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_Projects_ProjectId",
                table: "Tags",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tags_Projects_ProjectId",
                table: "Tags");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tags",
                table: "Tags");

            migrationBuilder.DropIndex(
                name: "IX_Tags_ProjectId",
                table: "Tags");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "Tags",
                newName: "ProjectsId");

            migrationBuilder.AlterColumn<string>(
                name: "Tag",
                table: "Tags",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Tags",
                type: "integer",
                nullable: false,
                defaultValue: 0)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tags",
                table: "Tags",
                columns: new[] { "ProjectsId", "Id" });

            migrationBuilder.AddForeignKey(
                name: "FK_Tags_Projects_ProjectsId",
                table: "Tags",
                column: "ProjectsId",
                principalTable: "Projects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
