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
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/main.js"></script>
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
    <div class="flex-column justify-center w-full">
        <div class="mx-auto flex justify-center w-full bg-slate-300">
            <div class="xl:w-96 flex gap-6 justify-center text-gray-700 hover:text-black">
                <form>
                    <input
                            type="search"
                            class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                            m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none
                          "
                            id="exampleSearch"
                            placeholder="Search Products"
                    />
                </form>
                <a href="/inventory/add">Add a new product </a>
            </div>
        </div>

        <table class="overflow-auto w-full">
            <thead>
            <tr class="bg-slate-400 text-xl border-slate-700 border">
                <th>Product Id</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody >
            <c:forEach var="product" items="${business.products}">
                <tr class="odd:bg-slate-300 even:bg-slate-400 border border-slate-700 text-lg text-center border text-gray-800">
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.amount}</td>
                    <td>$${product.price}</td>
                    <td class="flex justify-center gap-4"><a href="/inventory/edit/${product.id}" class="hover:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </a>
                        <p class="hover:text-black hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </p>
                    </td>
                </tr>
            </c:forEach>

            </tbody>
        </table>
    </div>

</div>
</body>
</html>
