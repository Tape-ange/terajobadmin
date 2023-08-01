import { environment } from "src/environments/environment";

export const api = {
  coreApi: environment.coreUrl,
  numVerifyUrl: environment.numVerify_url,
  numVerifyApikey: environment.numVerify_apikey,
  siret: environment.siret,
  siretKey: environment.siret_key,
  emailVerifyUrl: environment.emailVerify_url,

  auth: {
    register: 'auth/register_admin',
    loginAdmin:'auth/login/back_office',
    logout: '/api/v1/auth/logout',
    refreshToken: 'api/v1/auth/token',
    confirmAccount:'auth/validate_mail',
    resetPassword: '',
    newPassword:'',

  },

  users:{
    listUer: 'users',
    blockeUser:'users/block',
    listUserBlock: 'users/block',
    unblockUser: 'users/unblock',
    registerPartner : 'auth/register_partner'

  },

  tenders:{
    listTenderActive: 'tenders',
    blockTender:'tenders/blocked',
    listTenderBlock: 'tenders?blocked',
    unblockTender: 'tenders/unblocked',
    alltenders:'tenders?back_office'

  },

  commercial:{
    registerCommercial: 'auth/register_commercial',
    loginCommercial: 'auth/login/back_office',
    listCommercialBO:'profile/commercials'
  }
}
