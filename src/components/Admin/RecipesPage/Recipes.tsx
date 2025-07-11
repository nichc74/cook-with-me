import React from "react";
import RecipeDataRow from "./RecipeDataRow.tsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import TableSortLabel from "@mui/material/TableSortLabel";

interface RecipesPageProps {
  recipes: Array<any>;
  categories: Array<any>;
  cuisines: Array<any>;
  status: string;
  category: string;
  cuisine: string;
  search: string;
  sortField: string;
  sortDirection: "asc" | "desc";
  keyPress: (e: React.KeyboardEvent) => void;
  setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCuisineChange: (e: SelectChangeEvent) => void;
  handleCategoryChange: (e: SelectChangeEvent) => void;
  handleStatusChange: (e: SelectChangeEvent) => void;
  handleSortChange: (field: string) => void;
}

const Recipes = ({
  recipes,
  categories,
  cuisines,
  status,
  category,
  cuisine,
  search,
  sortField,
  sortDirection,
  keyPress,
  setSearch,
  handleCuisineChange,
  handleCategoryChange,
  handleStatusChange,
  handleSortChange,
}: RecipesPageProps) => {
  return (
    <div style={{ display: "block", flexWrap: "wrap", width: "100%" }}>
      <Table aria-label="recipes table">
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>

            <TableCell>
              <FormControl fullWidth>
                <InputLabel>Cuisine</InputLabel>
                <Select
                  value={cuisine}
                  label="Cuisine"
                  onChange={handleCuisineChange}
                >
                  <MenuItem value="">Clear Entry</MenuItem>
                  {cuisines.map((cuisine: any) => (
                    <MenuItem key={cuisine.id} value={cuisine.id}>
                      {cuisine.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>

            <TableCell>
              <FormControl fullWidth>
                <TextField
                  type="search"
                  value={search}
                  onChange={setSearch}
                  onKeyDown={keyPress}
                  placeholder="Search Recipes"
                />
              </FormControl>
            </TableCell>

            <TableCell>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  <MenuItem value="">Clear Entry</MenuItem>
                  <MenuItem value="published">Published</MenuItem>
                  <MenuItem value="unpublished">Unpublished</MenuItem>
                  <MenuItem value="archived">Archived</MenuItem>
                </Select>
              </FormControl>
            </TableCell>

            <TableCell>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="">Clear Entry</MenuItem>
                  {categories.map((category: any) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>

            <TableCell>
              <TableSortLabel
                active={sortField === "updated_at"}
                direction={sortDirection}
                onClick={() => handleSortChange("updated_at")}
              >
                <b>Last Updated</b>
              </TableSortLabel>
            </TableCell>

            <TableCell align="center"><b>Options</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {recipes.map((recipe: any) => (
            <RecipeDataRow key={recipe.id} recipe={recipe} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Recipes;
