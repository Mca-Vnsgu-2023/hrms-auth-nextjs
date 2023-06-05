import { AllLeaveRequestIcon, ApplyForLeaveIcon, ContractIcon, DashboardIcon, EmployeeSalaryIcon, EmployeesIcon, LeaveBalanceIcon, LeavesIcon, OvertimeIcon, PayrollIcon, PayslipIcon, SettingIcon, SystemFlagIcon } from "./icons";
import { ParentMenuType } from "./types";


export const ArrayOfMenu: ParentMenuType[]=[
    {
        path: 'dashboard',
        name: 'Dashboard',
        icon: DashboardIcon
    },
    {
        name:'Settings',
        icon: SettingIcon,
        isPrivate: true,
        children: [
            {
                path: 'settings/systemflags',
                name: 'System Flags',
                icon: SystemFlagIcon,
                isPrivate: true
            },
        ]
    },
    {
        path: 'employees',
        name: 'Employees',
        icon: EmployeesIcon,
        isPrivate: true
    },
    {
        path: 'contracts',
        name: 'Contracts',
        icon: ContractIcon,
        isPrivate: true
    },
    {
        name: 'Leaves',
        icon: LeavesIcon,
        children: [
            {
                path: 'leave/generate',
                name: 'Generate Leave',
                icon: PayslipIcon,
                isPrivate: true
            },
            {
                path: 'leave/apply',
                name: 'Apply For Leave',
                icon: ApplyForLeaveIcon,
            },
            {
                path: 'leave/all',
                name: 'All Leave Request',
                icon: AllLeaveRequestIcon,
            },
            {
                path: 'leave/balance',
                name: 'Leave Balance',
                icon: LeaveBalanceIcon,
            }
        ]
    },
    {
        path: 'overtime',
        name: 'Overtime',
        icon: OvertimeIcon,
        isPrivate: true
    },
    {
        name: 'Payroll',
        icon: PayrollIcon,
        children: [
            {
                path: 'payroll/salary',
                name: 'Employee Salary',
                icon: EmployeeSalaryIcon,
                isPrivate: true
            },
            {
                path: 'payroll/payslip',
                name: 'Payslip',
                icon: PayslipIcon,
                isPrivate: true
            },
        ]
    },
]