//Blood Donor Database
const blood_donor = [
  {
    id: 1,
    name: "Ripon Miah",
    age: 28,
    cell: "01913509868",
    location: "Dhaka",
    blood_group: "O+ve",
    donations: [
      { name: "Mony Akter", donate_date: "2018-05-22" },
      { name: "Ajmot Ali", donate_date: "2019-05-23" },
      { name: "Keramot Ali", donate_date: "2023-01-20" },
    ],
    last_donate_date: "2023-05-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },

  {
    id: 2,
    name: "Mony Akter",
    age: 26,
    cell: "01913509888",
    location: "Narayanganj",
    blood_group: "O+ve",
    donations: [
      { name: "Jui Akter", donate_date: "2019-05-22" },
      { name: "Rohul Ali", donate_date: "2020-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-02-20" },
    ],
    last_donate_date: "2023-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 3,
    name: "Mim Akter",
    age: 20,
    cell: "01915609888",
    location: "Gazipur",
    blood_group: "A+ve",
    donations: [
      { name: "Beli Akter", donate_date: "2017-05-22" },
      { name: "Rohul Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-04-20" },
    ],
    last_donate_date: "2023-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 4,
    name: "jorina Akter",
    age: 20,
    cell: "01915609887",
    location: "mirpur",
    blood_group: "B+ve",
    donations: [
      { name: "Beli Akter", donate_date: "2017-05-22" },
      { name: "Rohul Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-03-20" },
    ],
    last_donate_date: "2023-05-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 5,
    name: "Mosarof Bhuiya",
    age: 50,
    cell: "01916709888",
    location: "Dhaka",
    blood_group: "AB+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-02-20" },
    ],
    last_donate_date: "2023-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 6,
    name: "Asikur Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-04-05" },
    ],
    last_donate_date: "2023-04-05",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 7,
    name: "Anar Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-06-05" },
    ],
    last_donate_date: "2023-06-05",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 8,
    name: "Momotaj Rahman",
    age: 30,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-06-05" },
    ],
    last_donate_date: "2023-05-05",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 9,
    name: "Monoar Rahman",
    age: 20,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-06-05" },
    ],
    last_donate_date: "2023-04-05",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 10,
    name: "Asikur Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-05-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 11,
    name: "Asikur Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2023-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 12,
    name: "Hira Mia",
    age: 20,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "A+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-02-20" },
    ],
    last_donate_date: "2023-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 13,
    name: "Rubina Akter",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 14,
    name: "Rajia Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-05-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 15,
    name: "Moeen ali Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "O+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-02-20" },
    ],
    last_donate_date: "2023-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 16,
    name: "Abdur Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "A+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 17,
    name: "Joynob Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "A+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 18,
    name: "Momota Begum",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "O+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2023-02-10" },
    ],
    last_donate_date: "2023-02-10",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 19,
    name: "Jamal Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "O+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 20,
    name: "Karim Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "B+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
  {
    id: 21,
    name: "Rahim Rahman",
    age: 40,
    cell: "01916466888",
    location: "Dhaka",
    blood_group: "A+ve",
    donations: [
      { name: "Rina Akter", donate_date: "2017-05-22" },
      { name: "Mizan Ali", donate_date: "2019-05-23" },
      { name: "Minhaj Ali", donate_date: "2021-02-20" },
    ],
    last_donate_date: "2021-02-20",
    is_available: "",
    days_remaining: 0,
    massage: "",
  },
];
