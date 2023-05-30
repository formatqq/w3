import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // 开启一个 SMTP 连接池
  const transporter = nodemailer.createTransport({
    host: 'smtp.bizmail.yahoo.com',
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'jean@onestopmining.com',
      pass: 'xtuqkpqjkzlgnpzx'
    }
  })

  // 设置邮件内容（谁发送什么给谁）
  const mailOptions = {
    from: '"客户信息" jean@onestopmining.com', // 发件人
    to: 'info@onestopmining.com', // 收件人
    subject: body.name, // 主题
    html: `<div>
    <div>名字:${body.name}</div>
    <div>邮箱:${body.email}</div>
    <div>电话:${body.tel}</div>
    <div>公司:${body.company}</div>
    <div>信息:${body.remark}</div>
    </div>`
  }

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    }
    console.log(`Message: ${info.messageId}`)
    console.log(`sent: ${info.response}`)
  })

  return {msg: 'success'}
})

