using System;

namespace ExpenseApplication.Models
{
    public class Expense
    {
        public int ExpenseId { get; set; }
        public int ReceiptNumber { get; set; }

        private DateTime _receiptDate;
        public DateTime ReceiptDate
        {
            get => _receiptDate;
            set
            {
                if (value >= DateTimeOffset.Now)
                    throw new ArgumentOutOfRangeException(nameof(value));
                _receiptDate = value;
            }
        }


        public string ItemDescription { get; set; }
        public decimal Amount { get; set; }
        public decimal ReimbursementAmount { get; set; }
    }
}
