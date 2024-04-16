export default {
  adminServer:{
    tabWebsite:"網站",
    tabSubscribe:"訂閱",
    tabPayment:"支付",
    tabEmail:"郵件",
    tabSecurity:"安全",
    tabNotice:"通知",
    tabMigration:"數據遷移",
    tabFinance:"財務",
    emailTesting:"郵件測試",
    emailCodeTip:"郵件驗證碼內容，支持HTML，`emailcode`為驗證碼欄位，不可删除！",
    migrationTip:"遷移之前請做好資料備份。由於面板之間數據不相容，遷移僅保留用戶最基本的帳號email和uuid數據，並將使用者密碼初始為123456，請引導用戶及時修改密碼",
    migrationTip2:"請做好資料備份，並填寫正確的資料庫資訊，是否繼續？",
    RequestMinute:"請求/分鐘",
    addPay:"新增支付",
    modifyPay:"編輯支付",
    Server:{
      id:"id",
      created_at: "創建時間",
      updated_at: "更新時間",
      //website
      current_version:"當前版本",
      latest_version:"最新版本",
      starting_upgrade:"開始陞級",
      is_latest:"當前已是最新版本",
      upgrade_warning:"陞級有風險，請做好資料備份!",

      enable_register: "啟用注册",
      enable_email_code: "啟用注册驗證碼",
      enable_login_email_code: "啟用登入驗證碼",
      acceptable_email_suffixes: "合法郵箱尾碼",
      is_multipoint: "開啟多點登入",
      backend_url: "後端地址",
      frontend_url: "前端地址",
      api_prefix: "管理員api首碼",
      sub_name: "訂閱名稱",
      tek: "通信金鑰",
      sub_prefix_msg:"訂閱首碼，一行一個",
      enabled_clock_in: "啟用打卡",
      // email
      email_from: "發件人",
      email_from_alias: "發件人別名",
      email_secret: "金鑰",
      email_host: "伺服器地址",
      email_port:"埠",
      email_is_ssl: "是否SSL",
      email_nickname: "昵稱",
      email_subject: "郵件主題",
      email_content: "郵件內容",
      // security captcha
      key_long:"key_long",
      img_width:"img_width",
      img_height:"img_height",
      open_captcha:"open_captcha",
      open_captcha_time_out:"open_captcha_time_out",
      // security jwt
      signing_key: "jwt簽名",
      expires_time: "過期時間",
      buffer_time: "緩衝時間",
      issuer: "簽發者",
      // security RateLimitParams
      ip_role_param:"ip限流",
      visit_param:"用戶限流",
      // notice
      push_method:"推送管道",
      trigger_condition:"觸發條件",
      enable_tg_bot:"啟用TG Bot",
      enable_email:"啟用Email",
      enable_web_mail:"啟用站內信",
      bot_token: "tg bot token",
      tg_admin: "管理員 id",
      admin_id_msg:"管理員的帳戶ID，每行一個",
      tg_socks5 :"tg socks5代理",
      when_user_registered: "用戶註冊時",
      when_user_purchased: "用戶購買時",
      when_node_offline: "節點離線時",
      when_new_ticket:"新工單時",
      //finance
      enable_invitation_commission:'邀請傭金',
      commission_rate:'佣金率',
      withdraw_threshold:'提現閾值',
      enable_lottery:'抽獎',
      jackpot:"獎池",
      prize:"獎金",
      weight:"權重",
    },
    Migration:{
      panel_type:"面板類型",
      db_address:"資料庫地址",
      db_port:"資料庫埠",
      db_name:"資料庫名",
      db_username:"資料庫用戶",
      db_password:"資料庫密碼",
    },
  }
};