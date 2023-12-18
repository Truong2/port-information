//  Tài khoản
// Quản trị viên
export const dataAccountAdmin = [
  {
    key: '1',
    id: 1,
    email: 'example1@example.com',
    hoTen: 'Nguyen Van A',
    permission: 'Admin',
    status: true
  },
  {
    key: '2',
    id: 2,
    email: 'example2@example.com',
    hoTen: 'Tran Thi B',
    permission: 'User',
    status: false
  },
  {
    key: '3',
    id: 3,
    email: 'example3@example.com',
    hoTen: 'Le Van C',
    permission: 'Editor',
    status: true
  },
  {
    key: '4',
    id: 4,
    email: 'example4@example.com',
    hoTen: 'Pham Thi D',
    permission: 'User',
    status: false
  },
  {
    key: '5',
    id: 5,
    email: 'example5@example.com',
    hoTen: 'Truong Van E',
    permission: 'Admin',
    status: true
  },
  {
    key: '6',
    id: 6,
    email: 'example6@example.com',
    hoTen: 'Hoang Thi F',
    permission: 'User',
    status: false
  },
  {
    key: '7',
    id: 7,
    email: 'example7@example.com',
    hoTen: 'Do Van G',
    permission: 'Editor',
    status: true
  },
  {
    key: '8',
    id: 8,
    email: 'example8@example.com',
    hoTen: 'Vu Thi H',
    permission: 'User',
    status: false
  },
  {
    key: '10',
    id: 10,
    email: 'example10@example.com',
    hoTen: 'Pham Van K',
    permission: 'User',
    status: false
  },
  {
    key: '11',
    id: 11,
    email: 'example11@example.com',
    hoTen: 'Tran Thi L',
    permission: 'Editor',
    status: true
  },
  {
    key: '12',
    id: 12,
    email: 'example12@example.com',
    hoTen: 'Nguyen Van M',
    permission: 'User',
    status: false
  },
  {
    key: '13',
    id: 13,
    email: 'example13@example.com',
    hoTen: 'Le Thi N',
    permission: 'Admin',
    status: true
  },
  {
    key: '14',
    id: 14,
    email: 'example14@example.com',
    hoTen: 'Tran Van P',
    permission: 'User',
    status: false
  }
]

// Cơ sở y tế
export const dataFacility = [
  {
    key: '1',
    stt: 1,
    email: 'facility1@example.com',
    name: 'Hospital A',
    phone: '123-456-7890',
    address: '123 Main St, City 1',
    status: true
  },
  {
    key: '2',
    stt: 2,
    email: 'facility2@example.com',
    name: 'Clinic B',
    phone: '987-654-3210',
    address: '456 Oak St, City 2',
    status: false
  },
  {
    key: '3',
    stt: 3,
    email: 'facility3@example.com',
    name: 'Medical Center C',
    phone: '555-123-4567',
    address: '789 Elm St, City 3',
    status: true
  },
  {
    key: '4',
    stt: 4,
    email: 'facility4@example.com',
    name: 'Healthcare Institute D',
    phone: '333-444-5555',
    address: '456 Pine St, City 4',
    status: false
  },
  {
    key: '5',
    stt: 5,
    email: 'facility5@example.com',
    name: 'Emergency Care E',
    phone: '666-777-8888',
    address: '789 Cedar St, City 5',
    status: true
  },
  {
    key: '6',
    stt: 6,
    email: 'facility6@example.com',
    name: 'Wellness Clinic F',
    phone: '999-111-2222',
    address: '321 Maple St, City 6',
    status: false
  },
  {
    key: '7',
    stt: 7,
    email: 'facility7@example.com',
    name: 'Rehabilitation Center G',
    phone: '777-999-1111',
    address: '654 Birch St, City 7',
    status: true
  },
  {
    key: '8',
    stt: 8,
    email: 'facility8@example.com',
    name: 'Nursing Home H',
    phone: '111-222-3333',
    address: '987 Oak St, City 8',
    status: false
  },
  {
    key: '9',
    stt: 9,
    email: 'facility9@example.com',
    name: 'Diagnostic Center I',
    phone: '444-555-6666',
    address: '789 Elm St, City 9',
    status: true
  },
  {
    key: '10',
    stt: 10,
    email: 'facility10@example.com',
    name: 'Urgent Care J',
    phone: '222-333-4444',
    address: '321 Pine St, City 10',
    status: false
  },
  {
    key: '11',
    stt: 11,
    email: 'facility11@example.com',
    name: 'Surgery Center K',
    phone: '666-888-9999',
    address: '456 Cedar St, City 11',
    status: true
  },
  {
    key: '12',
    stt: 12,
    email: 'facility12@example.com',
    name: 'Pharmacy L',
    phone: '333-777-8888',
    address: '789 Maple St, City 12',
    status: false
  }
]

// Nhân viên
export const dataEmployee = [
  {
    key: '1',
    stt: 1,
    code: 'NV001',
    codeFacilities: 'CSYT001',
    employeeName: 'Nguyen Van A',
    email: 'nguyen.van.a@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City 1',
    userType: 'Doctor',
    status: true
  },
  {
    key: '2',
    stt: 2,
    code: 'NV002',
    codeFacilities: 'CSYT002',
    employeeName: 'Tran Thi B',
    email: 'tran.thi.b@example.com',
    phone: '987-654-3210',
    address: '456 Oak St, City 2',
    userType: 'Nurse',
    status: false
  },
  {
    key: '3',
    stt: 3,
    code: 'NV003',
    codeFacilities: 'CSYT001',
    employeeName: 'Le Van C',
    email: 'le.van.c@example.com',
    phone: '555-123-4567',
    address: '789 Elm St, City 3',
    userType: 'Admin',
    status: true
  },
  {
    key: '4',
    stt: 4,
    code: 'NV004',
    codeFacilities: 'CSYT003',
    employeeName: 'Pham Thi D',
    email: 'pham.thi.d@example.com',
    phone: '333-444-5555',
    address: '456 Pine St, City 4',
    userType: 'Staff',
    status: false
  },
  {
    key: '5',
    stt: 5,
    code: 'NV005',
    codeFacilities: 'CSYT002',
    employeeName: 'Hoang Van E',
    email: 'hoang.van.e@example.com',
    phone: '666-777-8888',
    address: '789 Cedar St, City 5',
    userType: 'Doctor',
    status: true
  },
  {
    key: '6',
    stt: 6,
    code: 'NV006',
    codeFacilities: 'CSYT003',
    employeeName: 'Nguyen Thi F',
    email: 'nguyen.thi.f@example.com',
    phone: '999-111-2222',
    address: '321 Maple St, City 6',
    userType: 'Nurse',
    status: false
  },
  {
    key: '7',
    stt: 7,
    code: 'NV007',
    codeFacilities: 'CSYT002',
    employeeName: 'Tran Van G',
    email: 'tran.van.g@example.com',
    phone: '777-999-1111',
    address: '654 Birch St, City 7',
    userType: 'Admin',
    status: true
  },
  {
    key: '8',
    stt: 8,
    code: 'NV008',
    codeFacilities: 'CSYT001',
    employeeName: 'Le Thi H',
    email: 'le.thi.h@example.com',
    phone: '111-222-3333',
    address: '987 Oak St, City 8',
    userType: 'Staff',
    status: false
  },
  {
    key: '9',
    stt: 9,
    code: 'NV009',
    codeFacilities: 'CSYT003',
    employeeName: 'Pham Van I',
    email: 'pham.van.i@example.com',
    phone: '444-555-6666',
    address: '789 Elm St, City 9',
    userType: 'Doctor',
    status: true
  },
  {
    key: '10',
    stt: 10,
    code: 'NV010',
    codeFacilities: 'CSYT001',
    employeeName: 'Nguyen Thi K',
    email: 'nguyen.thi.k@example.com',
    phone: '222-333-4444',
    address: '321 Pine St, City 10',
    userType: 'Nurse',
    status: false
  },
  {
    key: '11',
    stt: 11,
    code: 'NV011',
    codeFacilities: 'CSYT002',
    employeeName: 'Tran Van L',
    email: 'tran.van.l@example.com',
    phone: '666-888-9999',
    address: '456 Cedar St, City 11',
    userType: 'Admin',
    status: true
  },
  {
    key: '12',
    stt: 12,
    code: 'NV012',
    codeFacilities: 'CSYT003',
    employeeName: 'Le Thi M',
    email: 'le.thi.m@example.com',
    phone: '333-777-8888',
    address: '789 Maple St, City 12',
    userType: 'Staff',
    status: false
  }
]

// khách hàng
export const dataAccountCustomer = [
  {
    key: '1',
    stt: 1,
    email: 'john.doe1@example.com',
    hoTen: 'John Doe 1',
    phone: '123-456-7890',
    address: '123 Main St, City 1',
    status: true
  },
  {
    key: '2',
    stt: 2,
    email: 'jane.smith2@example.com',
    hoTen: 'Jane Smith 2',
    phone: '987-654-3210',
    address: '456 Oak St, City 2',
    status: false
  },
  {
    key: '3',
    stt: 3,
    email: 'bob.jones3@example.com',
    hoTen: 'Bob Jones 3',
    phone: '555-123-4567',
    address: '789 Elm St, City 3',
    status: true
  },
  {
    key: '4',
    stt: 4,
    email: 'mary.johnson4@example.com',
    hoTen: 'Mary Johnson 4',
    phone: '333-444-5555',
    address: '456 Pine St, City 4',
    status: false
  },
  {
    key: '5',
    stt: 5,
    email: 'peter.wilson5@example.com',
    hoTen: 'Peter Wilson 5',
    phone: '666-777-8888',
    address: '789 Cedar St, City 5',
    status: true
  },
  {
    key: '6',
    stt: 6,
    email: 'susan.white6@example.com',
    hoTen: 'Susan White 6',
    phone: '999-111-2222',
    address: '321 Maple St, City 6',
    status: false
  },
  {
    key: '7',
    stt: 7,
    email: 'david.thompson7@example.com',
    hoTen: 'David Thompson 7',
    phone: '777-999-1111',
    address: '654 Birch St, City 7',
    status: true
  },
  {
    key: '8',
    stt: 8,
    email: 'linda.anderson8@example.com',
    hoTen: 'Linda Anderson 8',
    phone: '111-222-3333',
    address: '987 Oak St, City 8',
    status: false
  },
  {
    key: '9',
    stt: 9,
    email: 'michael.hall9@example.com',
    hoTen: 'Michael Hall 9',
    phone: '444-555-6666',
    address: '789 Elm St, City 9',
    status: true
  },
  {
    key: '10',
    stt: 10,
    email: 'karen.brown10@example.com',
    hoTen: 'Karen Brown 10',
    phone: '222-333-4444',
    address: '321 Pine St, City 10',
    status: false
  },
  {
    key: '11',
    stt: 11,
    email: 'chris.miller11@example.com',
    hoTen: 'Chris Miller 11',
    phone: '666-888-9999',
    address: '456 Cedar St, City 11',
    status: true
  },
  {
    key: '12',
    stt: 12,
    email: 'jennifer.young12@example.com',
    hoTen: 'Jennifer Young 12',
    phone: '333-777-8888',
    address: '789 Maple St, City 12',
    status: false
  },
  {
    key: '13',
    stt: 13,
    email: 'brian.lewis13@example.com',
    hoTen: 'Brian Lewis 13',
    phone: '999-555-6666',
    address: '654 Oak St, City 13',
    status: true
  },
  {
    key: '14',
    stt: 14,
    email: 'angela.green14@example.com',
    hoTen: 'Angela Green 14',
    phone: '111-888-9999',
    address: '321 Elm St, City 14',
    status: false
  },
  {
    key: '15',
    stt: 15,
    email: 'steven.jones15@example.com',
    hoTen: 'Steven Jones 15',
    phone: '444-555-7777',
    address: '456 Cedar St, City 15',
    status: true
  },
  {
    key: '16',
    stt: 16,
    email: 'sandra.morris16@example.com',
    hoTen: 'Sandra Morris 16',
    phone: '777-888-1111',
    address: '789 Pine St, City 16',
    status: false
  },
  {
    key: '17',
    stt: 17,
    email: 'jason.hill17@example.com',
    hoTen: 'Jason Hill 17',
    phone: '222-333-4444',
    address: '654 Maple St, City 17',
    status: true
  },
  {
    key: '18',
    stt: 18,
    email: 'laura.king18@example.com',
    hoTen: 'Laura King 18',
    phone: '666-777-9999',
    address: '321 Oak St, City 18',
    status: false
  },
  {
    key: '19',
    stt: 19,
    email: 'brian.roberts19@example.com',
    hoTen: 'Brian Roberts 19',
    phone: '555-999-1111',
    address: '987 Pine St, City 19',
    status: true
  },
  {
    key: '20',
    stt: 20,
    email: 'susan.cook20@example.com',
    hoTen: 'Susan Cook 20',
    phone: '123-456-7777',
    address: '456 Birch St, City 20',
    status: false
  }
]

// Phân quyền
export const dataPermissionAdmin = [
  {
    key: '1',
    id: 1,
    role: 'FULL ADMIN',
    status: true
  },
  {
    key: '2',
    id: 2,
    role: 'READ ONLY ADMIN',
    status: true
  },
  {
    key: '3',
    id: 3,
    role: 'MODERATOR',
    status: false
  },
  {
    key: '4',
    id: 4,
    role: 'LIMITED ADMIN',
    status: true
  },
  {
    key: '5',
    id: 5,
    role: 'GUEST',
    status: false
  },
  {
    key: '6',
    id: 6,
    role: 'CUSTOM ADMIN',
    status: true
  },
  {
    key: '7',
    id: 7,
    role: 'VIEWER',
    status: true
  },
  {
    key: '8',
    id: 8,
    role: 'EDITOR',
    status: false
  },
  {
    key: '9',
    id: 9,
    role: 'ADMIN ASSISTANT',
    status: true
  },
  {
    key: '10',
    id: 10,
    role: 'POWER USER',
    status: true
  },
  {
    key: '11',
    id: 11,
    role: 'DEVELOPER',
    status: false
  },
  {
    key: '12',
    id: 12,
    role: 'TESTER',
    status: true
  },
  {
    key: '13',
    id: 13,
    role: 'ANALYST',
    status: true
  },
  {
    key: '14',
    id: 14,
    role: 'SUPERVISOR',
    status: false
  },
  {
    key: '15',
    id: 15,
    role: 'SECURITY ADMIN',
    status: true
  }
]

// Danh sách phân quyền
export const dataPermission = [
  {
    id: 1,
    name: 'Admin',
    assignedTo: ['Admin'],
    createdDate: '2023-01-01'
  },
  {
    id: 2,
    name: 'Khách hàng',
    assignedTo: ['User'],
    createdDate: '2023-02-01'
  },
  {
    id: 3,
    name: 'Bác sỹ',
    assignedTo: ['Doctor'],
    createdDate: '2023-03-01'
  },
  {
    id: 4,
    name: 'Cơ sở y tế',
    assignedTo: ['Healthcare'],
    createdDate: '2023-04-01'
  },
  {
    id: 5,
    name: 'Quyền 5',
    assignedTo: ['Admin', 'Editor'],
    createdDate: '2023-05-01'
  },
  {
    id: 6,
    name: 'Quyền 6',
    assignedTo: ['User'],
    createdDate: '2023-06-01'
  },
  {
    id: 7,
    name: 'Quyền 7',
    assignedTo: ['Admin'],
    createdDate: '2023-07-01'
  },
  {
    id: 8,
    name: 'Quyền 8',
    assignedTo: ['Editor'],
    createdDate: '2023-08-01'
  },
  {
    id: 9,
    name: 'Quyền 9',
    assignedTo: ['User'],
    createdDate: '2023-09-01'
  },
  {
    id: 10,
    name: 'Quyền 10',
    assignedTo: ['Admin', 'Editor'],
    createdDate: '2023-10-01'
  },
  {
    id: 11,
    name: 'Quyền 11',
    assignedTo: ['User'],
    createdDate: '2023-11-01'
  },
  {
    id: 12,
    name: 'Quyền 12',
    assignedTo: ['Admin'],
    createdDate: '2023-12-01'
  }
]

// data service
export const dataService = [
  {
    id: 1,
    name: 'Khám tổng quát',
    facility: 'Bệnh viện Bạch Mai',
    updated_at: '2023-07-20',
    category: 'Khám chữa bệnh',
    statusBrowsing: 'Đã duyệt',
    status: true
  },
  {
    id: 2,
    name: 'Khám sức khỏe định kỳ',
    facility: 'Phòng khám Family',
    updated_at: '2023-07-20',
    category: 'Khám chữa bệnh',
    statusBrowsing: 'Đã duyệt',
    status: true
  },
  {
    id: 3,
    name: 'Khám sức khỏe cho trẻ em',
    facility: 'Bệnh viện Nhi Trung ương',
    updated_at: '2023-07-20',
    category: 'Khám chữa bệnh',
    statusBrowsing: 'Đã duyệt',
    status: false
  },
  {
    id: 4,
    name: 'Khám sức khỏe cho người cao tuổi',
    facility: 'Bệnh viện Hữu Nghị Việt Đức',
    updated_at: '2023-07-20',
    category: 'Khám chữa bệnh',
    statusBrowsing: 'Đã duyệt',
    status: false
  },
  {
    id: 5,
    name: 'Khám sức khỏe cho người bệnh mãn tính',
    facility: 'Bệnh viện K Trung ương',
    updated_at: '2023-07-20',
    category: 'Khám chữa bệnh',
    statusBrowsing: 'Đã duyệt',
    status: true
  },
  {
    id: 6,
    name: 'Xét nghiệm máu',
    facility: 'Bệnh viện 108',
    updated_at: '2023-07-20',
    category: 'Xét nghiệm',
    statusBrowsing: 'Từ chối',
    status: false
  },
  {
    id: 7,
    name: 'Xét nghiệm sinh hóa',
    facility: 'Bệnh viện Đa khoa Quốc tế Vinmec Central Park',
    updated_at: '2023-07-20',
    category: 'Xét nghiệm',
    statusBrowsing: 'Đã duyệt',
    status: false
  },
  {
    id: 8,
    name: 'Chụp X-quang',
    facility: 'Bệnh viện E',
    updated_at: '2023-07-20',
    category: 'Chẩn đoán hình ảnh',
    statusBrowsing: 'Đã duyệt',
    status: false
  },
  {
    id: 9,
    name: 'Chụp cộng hưởng từ (MRI)',
    facility: 'Bệnh viện Đa khoa Quốc tế Vinmec Times City',
    updated_at: '2023-07-20',
    category: 'Chẩn đoán hình ảnh',
    statusBrowsing: 'Chờ duyệt',
    status: false
  },
  {
    id: 10,
    name: 'Điều trị nội khoa',
    facility: 'Bệnh viện Bạch Mai',
    updated_at: '2023-07-20',
    category: 'Điều trị',
    statusBrowsing: 'Từ chối',
    status: true
  },
  {
    id: 11,
    name: 'Tư vấn dinh dưỡng',
    facility: 'Bệnh viện Đa khoa Quốc tế Vinmec Central Park',
    updated_at: '2023-07-20',
    category: 'Tư vấn sức khỏe',
    statusBrowsing: 'Chờ duyệt',
    status: true
  },
  {
    id: 12,
    name: 'Tư vấn sức khỏe sinh sản',
    facility: 'Bệnh viện Phụ sản Trung ương',
    updated_at: '2023-07-20',
    category: 'Tư vấn sức khỏe',
    statusBrowsing: 'Chưa duyệt',
    status: true
  }
]

// data CHuyên khoa
export const dataMedicalSpecialty = [
  {
    id: 1,
    name: 'Hình ảnh học',
    facility: 'Bệnh viện Đại học Y Dược',
    description: 'Chuyên khoa nghiên cứu và ứng dụng các kỹ thuật hình ảnh trong chẩn đoán và điều trị bệnh',
    created_at: '2023-07-20T00:00:00.000Z'
  },
  {
    id: 2,
    name: 'Nội khoa',
    facility: 'Bệnh viện Bạch Mai',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý nội khoa',
    created_at: '2023-07-21T00:00:00.000Z'
  },
  {
    id: 3,
    name: 'Ngoại khoa',
    facility: 'Bệnh viện Việt Đức',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý ngoại khoa',
    created_at: '2023-07-22T00:00:00.000Z'
  },
  {
    id: 4,
    name: 'Phụ sản',
    facility: 'Bệnh viện Phụ sản Trung ương',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý phụ sản',
    created_at: '2023-07-23T00:00:00.000Z'
  },
  {
    id: 5,
    name: 'Chấn thương chỉnh hình',
    facility: 'Bệnh viện Chấn thương Chỉnh hình Trung ương',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý chấn thương chỉnh hình',
    created_at: '2023-07-24T00:00:00.000Z'
  },
  {
    id: 6,
    name: 'Nhi khoa',
    facility: 'Bệnh viện Nhi Trung ương',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý nhi khoa',
    created_at: '2023-07-25T00:00:00.000Z'
  },
  {
    id: 7,
    name: 'Tâm thần',
    facility: 'Bệnh viện Tâm thần Trung ương I',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý tâm thần',
    created_at: '2023-07-26T00:00:00.000Z'
  },
  {
    id: 8,
    name: 'Tai mũi họng',
    facility: 'Bệnh viện Tai Mũi Họng Trung ương',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý tai mũi họng',
    created_at: '2023-07-27T00:00:00.000Z'
  },
  {
    id: 9,
    name: 'Răng hàm mặt',
    facility: 'Bệnh viện Răng Hàm Mặt Trung ương',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý răng hàm mặt',
    created_at: '2023-07-28T00:00:00.000Z'
  },
  {
    id: 10,
    name: 'Da liễu',
    facility: 'Bệnh viện Da Liễu Trung ương',
    description: 'Chuyên khoa nghiên cứu và điều trị các bệnh lý da liễu',
    created_at: '2023-07-29T00:00:00.000Z'
  }
]

// lich
export const Schedule = [
  {
    id: 1,
    time: '08:00 - 09:00'
  },
  {
    id: 2,
    time: '09:00 - 10:00'
  },
  {
    id: 3,
    time: '10:00 - 11:00'
  },
  {
    id: 4,
    time: '11:00 - 12:00'
  },
  {
    id: 5,
    time: '13:30 - 14:30'
  },
  {
    id: 6,
    time: '14:30 - 15:30'
  },
  {
    id: 7,
    time: '15:30 - 16:30'
  },
  {
    id: 8,
    time: '16:30 - 17:30'
  }
]
