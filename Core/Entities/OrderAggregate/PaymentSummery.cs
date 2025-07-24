using System;

namespace Core.Entities.OrderAggregate;

public class PaymentSummery
{
    public int Last4 { get; set; }
    public required string Brand { get; set; }
    public int ExpMonth { get; set; }
    public int ExpYear { get; set; }
}
