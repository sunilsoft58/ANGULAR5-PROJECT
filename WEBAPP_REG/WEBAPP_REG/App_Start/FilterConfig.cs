﻿using System.Web;
using System.Web.Mvc;

namespace WEBAPP_REG
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
