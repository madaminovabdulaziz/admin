// import Swal from "sweetalert2";

export function catchError(error) {
    console.log(error);
    // if (error.response.status == 401) {
    //     console.clear();
    //     localStorage.removeItem("role");
    //     localStorage.removeItem("access_token");
    //     Swal.mixin({
    //             toast: true,
    //             position: "top-end",
    //             showConfirmButton: false,
    //             timer: 2000,
    //             timerProgressBar: true,
    //             didOpen: (toast) => {
    //                 toast.addEventListener("mouseenter", Swal.stopTimer);
    //                 toast.addEventListener("mouseleave", Swal.resumeTimer);
    //             },
    //         })
    //         .fire({
    //             icon: "error",
    //             title: "Incorrect username or password!",
    //         })
    //         .then(() => {
    //             if (window.location.pathname == "/") {
    //                 console.log();
    //             } else {
    //                 window.location.href = "/";
    //             }
    //         });
    // } else 
    if (error.message == "Network Error") {
        return Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        }).fire({
            icon: "warning",
            title: "Internet connection unavailable!",
        });
    }
}
//     else if (error.response.status == 422) {
//         return Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener("mouseenter", Swal.stopTimer);
//                 toast.addEventListener("mouseleave", Swal.resumeTimer);
//             },
//         }).fire({
//             icon: "warning",
//             title: "The information is incomplete!",
//         });
//     } else 
//     if (error.response.status == 404) {
//         return Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener("mouseenter", Swal.stopTimer);
//                 toast.addEventListener("mouseleave", Swal.resumeTimer);
//             },
//         }).fire({
//             icon: "error",
//             title: "The URL is invalid!",
//         });
//     } else if (error.response.status == 400) {
//         return Swal.mixin({
//             toast: true,
//             position: "top-end",
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener("mouseenter", Swal.stopTimer);
//                 toast.addEventListener("mouseleave", Swal.resumeTimer);
//             },
//         }).fire({
//             icon: "error",
//             title: error.response.data.detail,
//         });
//     } else if (
//         error.response.data.detail == "Inactive user" ||
//         error == "Inactive user"
//     ) {
//         console.clear();
//         localStorage.clear();
//         Swal.mixin({
//                 toast: true,
//                 position: "top-end",
//                 showConfirmButton: false,
//                 timer: 2000,
//                 timerProgressBar: true,
//                 didOpen: (toast) => {
//                     toast.addEventListener("mouseenter", Swal.stopTimer);
//                     toast.addEventListener("mouseleave", Swal.resumeTimer);
//                 },
//             })
//             .fire({
//                 icon: "error",
//                 title: "Incorrect username or password!",
//             })
//             .then(() => {
//                 if (window.location.pathname == "/") {
//                     console.log();
//                 } else {
//                     window.location.href = "/";
//                 }
//             });
//     }
//     console.clear();
// }