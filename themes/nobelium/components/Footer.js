import DarkModeButton from '@/components/DarkModeButton'
import Vercel from '@/components/Vercel'
import { siteConfig } from '@/lib/config'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post } = props
  const fullWidth = post?.fullWidth ?? false
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer
     className={`z-10 relative mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
       !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
     }`}
   >
     <DarkModeButton className='text-center py-4'/>
     <hr className="border-gray-200 dark:border-gray-600" />
     <div className="my-4 text-sm leading-6">
       <div className="flex align-baseline justify-between flex-wrap">
        <p>
           <b>版权所有 © {copyrightDate} {BLOG.AUTHOR} </b>
         </p>
           <p><a href='mailto:ncc-17039@foxmail.com' target="_blank">Mail</a> | <a href='https://weibo.com/u/7818171482' target="_blank">微博</a> | <a href='http://discord.com/' target="_blank">@David_Bashir</a> | <a href='https://music.163.com/#/user/home?id=1448752438' target="_blank">网易云</a> | <a href='https://twitter.com/CNwithZZR' target="_blank">X</a> | <a href='https://t.me/NCC17039' target="_blank">TG</a> | <a href='/rss/feed.xml' target="_blank">订阅</a></p>
           <p>本站原创内容基于 <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh' target="_blank">CC BY-NC-SA 4.0</a> 许可协议</p>
           <p><a href='https://www.cloudflare.com/' target="_blank"><i class="fa-brands fa-cloudflare"></i> 提供云防护</a></p>
         <Vercel />
       </div>
     </div>
   </footer>
}
