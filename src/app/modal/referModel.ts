export class referModel{
    id:number
    tenantId :number
    refCode:string
    createdBy:number
    updatedBy:number
    createdAt:string
    updatedAt:string
    isDeleted:boolean
    name:string
    inviteDate:string
    companyName:string
    expiryDate:string
    subscriptionType:string
    fullName:string
    email:string
    userName:string
    roleId:number
    roleName:string

    constructor(id:number,tenantId:number,refCode:string,createdBy:number,updatedBy:number,createdAt:string,updatedAt:string,isDeleted:boolean,
        name:string,inviteDate:string,companyName:string,expiryDate:string,subscriptionType:string,fullName:string,
        email:string,userName:string,roleId:number,roleName:string){
            this.id = id
            this.tenantId=tenantId
            this.refCode = refCode
            this.createdBy = createdBy
            this.updatedBy = updatedBy
            this.createdAt = createdAt
            this.updatedAt = updatedAt
            this.isDeleted = isDeleted
            this.name= name
            this.inviteDate = inviteDate
            this.companyName = companyName
            this.expiryDate =expiryDate
            this.subscriptionType = subscriptionType
            this.fullName = fullName
            this.email = email
            this.userName = userName
            this.roleId = roleId
            this.roleName = roleName
        }
}