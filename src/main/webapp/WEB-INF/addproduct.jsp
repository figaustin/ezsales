<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>EZSales</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="flex font-serif">
<div class="text-white container inset-y-0 left-0 flex-column max-w-xs text-center border-slate-800 lg:border-r-4 bg-cyan-800 gap-2 h-screen">
    <div class="text-slate-300 text-4xl lg:border-b lg:border-slate-200/10 p-5">${business.name}</div>
    <div class="text-slate-300 text-xl lg:border-b lg:border-slate-200/10 hover:bg-cyan-900 p-2 flex justify-center gap-1 transition ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
        <a href="/business/dashboard">Dashboard</a>
    </div>
    <div class="text-slate-300 text-xl lg:border-b lg:border-slate-200/10 hover:bg-cyan-900 p-2 flex justify-center gap-1 transition ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <a href="/invoice">Make a sale</a>
    </div>
    <div class="text-slate-300 text-xl lg:border-b lg:border-slate-200/10 transition ease-in-out hover:bg-cyan-900 p-2 flex justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        <a href="/inventory">Inventory</a>
    </div>
    <div class="text-slate-300 text-xl lg:border-b lg:border-slate-200/10 transition ease-in-out hover:bg-cyan-900 p-2 flex justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <a href="/employees">Employees</a>
    </div>
    <div class="inset-x-0 bottom-0 mt-28">
        <a href="/" class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
        </a>
    </div>
</div>
    <div class="mx-auto">
        <p class="text-3xl font-serif text-center mt-6">Add your new product</p>
        <form:form class="mt-20 w-96" action="/inventory/add" method="post" modelAttribute="product">
            <div class="relative z-0 w-full mb-6 group">
                <form:input path="name" type="text" name="name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500
                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required="true"></form:input>
                <form:label path="name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6">Product Name
                </form:label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="number" name="price" step="0.01"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500
                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required="true">
                <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6">Price
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="number" name="amount"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500
                focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="true"
                />
                <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform
                           -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
                           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                           peer-focus:scale-75 peer-focus:-translate-y-6">Amount
                </label>
            </div>

            <form:hidden path="business" name="business" value="${business.id}"/>
            <button type="submit"
                    class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                        ont-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                        dark:focus:ring-blue-800">Submit
            </button>
        </form:form>

    </div>
</div>
</body>
</html>
