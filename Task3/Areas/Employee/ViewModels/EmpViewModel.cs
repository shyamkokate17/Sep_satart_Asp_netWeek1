using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;
using System;

namespace Task3.Areas.Employee.ViewModels
{
    public class EmpViewModel
    {
        [Display(Name = "EMP ID")]
        [Required]
        public int EmpID { get; set; }




        [Display(Name = "Employee Name")]
        [Required(ErrorMessage = "{0} cannot be empty!")]
        [MaxLength(80, ErrorMessage = "{0} can contain a maxium of {1} characters.")]
        [MinLength(2, ErrorMessage = "{0} should contain a minimum of {1} characters.")]
        public string EmpName { get; set; }




        [Required]
        [EmailAddress(ErrorMessage = "{0} is not valid.")]
        public string Email { get; set; }




        [Display(Name = "DoJ")]
        [Required]
        public DateTime JoiningDate { get; set; }




        [Display(Name = "Post")]
        [Required]
        public string Post { get; set; }


        [Display(Name ="Salary")]
        [Required]
        
        public double Salary { get; set; }



    }
}