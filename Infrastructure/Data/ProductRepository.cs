using System;
using System.Security.Cryptography.X509Certificates;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class ProductRepository(StoreContext context) : IProductRepository
{
    private readonly StoreContext context = context;

    public void AddProduct(Product product)
    {
        context.Products.Add(product);

    }

    public void DeleteProduct(Product product)
    {
        context.Products.Remove(product);
        // context.Entry(product).State = EntityState.Deleted; 
    }

    public async Task<IReadOnlyList<String>> GetBrandsAsync()
    {
        return await context.Products.Select(x => x.Brand)
            .Distinct()
            .ToListAsync(); // Using ToListAsync to get distinct brands as a list
    }

    public async Task<Product?> GetProductByIdAsync(int id)
    {
        return await context.Products
            .FindAsync(id); // Using AsTask to convert ValueTask to Task
    }

    // public async Task<IReadOnlyList<Product>> GetProductsAsync()
    // { // Using AsNoTracking for better performance if we don't need to track changes
    //     return await context.Products.ToListAsync(); // Using ToListAsync to get all products as a list
    // }

    public async Task<IReadOnlyList<Product>> GetProductsAsync(string? brand, string? type, string? sort)
    {
         var query = context.Products
            .AsQueryable();
            if (!string.IsNullOrWhiteSpace(brand))
            {
                query = query.Where(x => x.Brand == brand);
            }
            if (!string.IsNullOrWhiteSpace(type))
            {
                query = query.Where(x => x.Type == type);
            }
            query = sort switch
                {
                    
                    "priceAsc" => query.OrderBy(x => x.Price),
                    "priceDesc" => query.OrderByDescending(x => x.Price),
                    _ => query.OrderBy(x => x.Name) // Default case if sort is not recognized
                };
            
        return await query.ToListAsync();
    }

    public async Task<IReadOnlyList<string>> GetTypesAsync()
    {
        return await context.Products.Select(x => x.Type)
            .Distinct()
            .ToListAsync();
    }

    public bool ProductExists(int id)
    {
        return context.Products.Any(p => p.Id == id);
        // This checks if any product exists with the given id
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await context.SaveChangesAsync() > 0;
    }

    public void UpdateProduct(Product product)
    {
        context.Entry(product).State = EntityState.Modified;
    }

    Task<IReadOnlyList<string>> IProductRepository.GetBrandsAsync()
    {
        throw new NotImplementedException();
    }
}
