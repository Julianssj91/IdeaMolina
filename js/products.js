const productos = [
  {
    id: 1,
    nombre: "Radiant Charizard",
    precio: 5000,
    img:
      "https://imgs.search.brave.com/-Tn4Z4VvmrGPmMwOCpimFwvMQ5OgnDMYtE7THh2viAU/rs:fit:310:425:1/g:ce/aHR0cHM6Ly9wb2tl/Y2FyZHZhbHVlcy5z/My5hbWF6b25hd3Mu/Y29tL3N0YXRpYy9p/bWFnZXMvYWx0L2xh/cmdlL3N3c2gxMDUv/MTEtcmFkaWFudC1j/aGFyaXphcmQtaG9s/by11bmxpbWl0ZWQu/anBn",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Lugia V Star",
    precio: 3000,
    img:
      "https://imgs.search.brave.com/3e9h0iVNkCxI4bRKzMjVtl74Nfk2-Hi7BBl-TZUuvno/rs:fit:600:838:1/g:ce/aHR0cHM6Ly93d3cu/cG9rZWJlYWNoLmNv/bS9uZXdzLzIwMjIv/MDkvTHVnaWEtVlNU/QVItMS5wbmc",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Ancient Mew",
    precio: 150000,
    img:
      "https://imgs.search.brave.com/NZeeAW_Lzxcl9tVMiXQ8G3P3wpp_oDpZm3oWoXo7-ZQ/rs:fit:922:1200:1/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy0wa3Z2/OS9pbWFnZXMvc3Rl/bmNpbC8xMjgweDEy/ODAvcHJvZHVjdHMv/MjE1NjYwLzMwMjMz/Mi9hcGk4Y2k0cG1f/XzYwMjA5LjE1MTk5/NTMxMDYuanBnP2M9/MiZpbWJ5cGFzcz1v/bg",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Darkrai EX",
    precio: 2000,
    img:
      "https://imgs.search.brave.com/eaChDvpHm4qwzkDh5J-s9tF_aeZ1lCzPacrq1GtL2Es/rs:fit:700:990:1/g:ce/aHR0cHM6Ly93d3cu/Y2FyZHNieWJyYW1t/ZXJzLmNvbS5hdS9h/c3NldHMvZnVsbC8x/NTU2OV8xNTU3Ny5w/bmc_MjAxODA3MTEy/MzMzMDE",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Grass Energy",
    precio: 250,
    img:
      "https://imgs.search.brave.com/osR69lmdQ7-XTnX3fe6PZJgZZVPA44rcybj20i_kOlE/rs:fit:420:590:1/g:ce/aHR0cDovL3d3dy5w/b2tlbW9ubWlsbGVu/bml1bS5uZXQvaW1h/Z2VzL3RjZy9kcC8x/MjMuanBn",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Aqua Energy",
    precio: 250,
    img:
      "https://imgs.search.brave.com/vvFv_CdpeWZ4Xrg2dyVkgiVDoS_5wn3Bjb8Y44T6J2I/rs:fit:245:342:1/g:ce/aHR0cHM6Ly93d3cu/Y3Bva2Vtb24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzAxL3h5MV9lc18x/MzQucG5n",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Fire Energy",
    precio: 250,
    img:
      "https://imgs.search.brave.com/2y7q22bQ8qB4l4dbND8rsg8nHNKm4ucfjISFMclpA5I/rs:fit:337:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/cllyb25qY2p5ejUz/cl9QSXY3RUF3SGFL/WiZwaWQ9QXBp",
    cantidad: 1,
  },
  {
    id: 8,
    nombre: "Electric Energy",
    precio: 250,
    img:
      "https://imgs.search.brave.com/_gLnCUBTVjRR10KFyiM85D-yk2I7KYGWOBIqF6vRl1g/rs:fit:339:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/aUVCRXNNSkhhelNL/NVI5dGtEYTZRSGFL/ViZwaWQ9QXBp",
    cantidad: 1,
  },
  {
    id: 9,
    nombre: "Strong Energy",
    precio: 300,
    img:
      "https://imgs.search.brave.com/stJ6P-G03WgFDFeDdfbG-X0yx6GtdDSLzaNX7eUEWH4/rs:fit:871:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2F5bWVkaWEt/Y29udGVudC5jb20v/LmltYWdlL3Rfc2hh/cmUvTVRjME5EVTNN/akF6TURRMU1EUTVO/ekEwLzEwLWJlc3Qt/cG9rZW1vbi1lbmVy/Z3ktY2FyZC10eXBl/cy5qcGc",
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Prism Energy",
    precio: 400,
    img:
      "https://imgs.search.brave.com/7Ftg7HtgbNX_UDUcfwm1rEfo4FRN5i1NUN_5ZMJqoEg/rs:fit:452:635:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1tcGJvT3JBS2ZO/cy9VdEdNcmN3U0hL/SS9BQUFBQUFBQUFO/ay9MRVNyT0dnZkxl/WS9zMTYwMC8wOTMt/cHJpc20tZW5lcmd5/LmpwZw",
    cantidad: 1,
  },
];
