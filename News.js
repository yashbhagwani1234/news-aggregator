import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "ft.com",
                "title": "Anti-Americanism is a mug’s game",
                "description": "Boycott Tesla if it makes you feel better — but the best critiques of Trump and Musk will come from the US itself",
                "url": "https://biztoc.com/x/64c64244231def84",
                "urlToImage": "https://biztoc.com/cdn/64c64244231def84_s.webp",
                "publishedAt": "2025-03-29T07:03:45Z",
                "content": "Boycott Tesla if it makes you feel better but the best critiques of Trump and Musk will come from the US itself\r\nThis story appeared on ft.com, 2025-03-29 05:00:55."
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Automotive Stocks To Consider – March 27th",
                "description": "Tesla, NVIDIA, and Taiwan Semiconductor Manufacturing are the three Automotive stocks to watch today, according to MarketBeat’s stock screener tool. Automotive stocks refer to shares of companies involved in the production, development, or distribution of veh…",
                "url": "https://www.etfdailynews.com/2025/03/29/automotive-stocks-to-consider-march-27th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-03-29T07:02:54Z",
                "content": "Tesla, NVIDIA, and Taiwan Semiconductor Manufacturing are the three Automotive stocks to watch today, according to MarketBeat’s stock screener tool. Automotive stocks refer to shares of companies inv… [+4128 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Energy Stocks To Consider – March 27th",
                "description": "Tesla, Broadcom, Exxon Mobil, Vertiv, and Chevron are the five Energy stocks to watch today, according to MarketBeat’s stock screener tool. Energy stocks are shares of companies that operate in the production, distribution, and refinement of energy sources, s…",
                "url": "https://www.etfdailynews.com/2025/03/29/energy-stocks-to-consider-march-27th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-03-29T07:02:54Z",
                "content": "Tesla, Broadcom, Exxon Mobil, Vertiv, and Chevron are the five Energy stocks to watch today, according to MarketBeat’s stock screener tool. Energy stocks are shares of companies that operate in the p… [+5714 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Best Industrial Stocks Worth Watching – March 27th",
                "description": "Tesla, Broadcom, Micron Technology, Vertiv, Chevron, Vistra, and Eaton are the seven Industrial stocks to watch today, according to MarketBeat’s stock screener tool. Industrial stocks are shares in companies involved in the production of goods, transportation…",
                "url": "https://www.etfdailynews.com/2025/03/29/best-industrial-stocks-worth-watching-march-27th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-03-29T07:02:53Z",
                "content": "Tesla, Broadcom, Micron Technology, Vertiv, Chevron, Vistra, and Eaton are the seven Industrial stocks to watch today, according to MarketBeat’s stock screener tool. Industrial stocks are shares in c… [+8275 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Best Utility Stocks To Research – March 27th",
                "description": "Tesla, Berkshire Hathaway, and Ford Motor are the three Utility stocks to watch today, according to MarketBeat’s stock screener tool. Utility stocks are shares of companies that provide essential services, such as electricity, water, or natural gas, which are…",
                "url": "https://www.etfdailynews.com/2025/03/29/best-utility-stocks-to-research-march-27th/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-03-29T07:02:51Z",
                "content": "Tesla, Berkshire Hathaway, and Ford Motor are the three Utility stocks to watch today, according to MarketBeat’s stock screener tool. Utility stocks are shares of companies that provide essential ser… [+3803 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Elon Musk Blasts Minnesota Governor Tim Walz Over Tesla Stock Mockery, Says It's 'Evil' To Celebrate Others' Losses",
                "description": "Tesla Inc. (NASDAQ:TSLA) CEO Elon Musk slammed Governor Tim Walz (D-Minn.) during an interview, accusing him of being a \"cr**p\" for mocking his EV company's stock price decline.\nWhat Happened: Appearing on the special report with Bret Baier, Musk referenced a…",
                "url": "https://biztoc.com/x/4cb102de35dba985",
                "urlToImage": "https://biztoc.com/cdn/4cb102de35dba985_s.webp",
                "publishedAt": "2025-03-29T06:30:44Z",
                "content": "Tesla Inc. (NASDAQ:TSLA) CEO Elon Musk slammed Governor Tim Walz (D-Minn.) during an interview, accusing him of being a \"cr**p\" for mocking his EV company's stock price decline.What Happened: Appeari… [+140 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Tesla (NASDAQ:TSLA) Price Target Cut to $130.00 by Analysts at HSBC",
                "description": "Tesla (NASDAQ:TSLA – Get Free Report) had its price objective cut by research analysts at HSBC from $165.00 to $130.00 in a research report issued to clients and investors on Thursday, Marketbeat Ratings reports. The brokerage presently has a “reduce” rating …",
                "url": "https://www.etfdailynews.com/2025/03/29/tesla-nasdaqtsla-price-target-cut-to-130-00-by-analysts-at-hsbc/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-03-29T06:24:56Z",
                "content": "Tesla (NASDAQ:TSLA – Get Free Report) had its price objective cut by research analysts at HSBC from $165.00 to $130.00 in a research report issued to clients and investors on Thursday, Marketbeat Rat… [+5613 chars]"
                },
                {
                "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
                },
                "author": "Richard Cantillon",
                "title": "Attacking Tesla will not help Europe’s car industry",
                "description": "Elon Musk’s company sells carbon credits to the likes of Peugeot, Opel, Citroën, Fiat and Alfa Romeo",
                "url": "https://www.irishtimes.com/business/2025/03/29/attacking-tesla-will-not-help-europes-car-industry/",
                "urlToImage": "https://www.irishtimes.com/resizer/v2/ZDJ75V6YNY66AJRSNKMYYTSFHY.jpg?smart=true&auth=38db21e220b7210588c82d2ddc125f0887b3349083c2a0aa94f8e0b5ab9f80bf&width=1200&height=630",
                "publishedAt": "2025-03-29T06:00:01Z",
                "content": "Taking revenge for tariffs by targeting Tesla sales may seem like a smart move, but theres a sting in the tail. Singling out the beloved car company of US presidents apprentice Elon Musk might seem l… [+2258 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "Elon Musk’s xAI firm buys social media platform X for $33bn - The Guardian",
                "description": "Elon Musk’s xAI firm buys social media platform X for $33bnThe Guardian Elon Musk Sells X, Formerly Twitter, for $33 Billion to His AI StartupYahoo Finance Elon Musk sells X to his own xAI for $33 billion in all-stock dealThe Associated Press Musk's xAI buys …",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=176854215",
                "urlToImage": null,
                "publishedAt": "2025-03-29T05:52:17Z",
                "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
                },
                {
                "source": {
                "id": null,
                "name": "ETF Daily News"
                },
                "author": "MarketBeat News",
                "title": "Tesla (NASDAQ:TSLA) Trading Down 2.5% on Analyst Downgrade",
                "description": "Shares of Tesla, Inc. (NASDAQ:TSLA – Get Free Report) dropped 2.5% on Friday after Deutsche Bank Aktiengesellschaft lowered their price target on the stock from $420.00 to $345.00. Deutsche Bank Aktiengesellschaft currently has a buy rating on the stock. Tesl…",
                "url": "https://www.etfdailynews.com/2025/03/29/tesla-nasdaqtsla-trading-down-2-5-on-analyst-downgrade/",
                "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
                "publishedAt": "2025-03-29T05:41:03Z",
                "content": "Shares of Tesla, Inc. (NASDAQ:TSLA – Get Free Report) dropped 2.5% on Friday after Deutsche Bank Aktiengesellschaft lowered their price target on the stock from $420.00 to $345.00. Deutsche Bank Akti… [+5848 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "NPR"
                },
                "author": "Emma Bowman",
                "title": "Hundreds of anti-Musk protests are planned at Tesla locations worldwide this weekend",
                "description": "The protests are scheduled to take place at Tesla facilities across the U.S. and in Europe on Saturday, as part of a grassroots campaign against Tesla CEO Elon Musk's work in the Trump administration.",
                "url": "https://www.npr.org/2025/03/29/nx-s1-5343986/anti-musk-protests-planned-worldwide",
                "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/7366x4143+0+384/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fd2%2Ff4%2F5d32886d4a988ae2dcd7202ebcf4%2Fap25075011999825.jpg",
                "publishedAt": "2025-03-29T05:00:44Z",
                "content": "Tesla facilities worldwide have been the target of protests objecting to Tesla CEO Elon Musk's influential role in the Trump administration. This weekend, organizers who have been leading peaceful pr… [+3806 chars]"
                },
                {
                "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
                },
                "author": "Ed Power",
                "title": "Hitchhiker’s Guide offered glimpse of a future where technology would mediate almost every interaction",
                "description": "Sci-fi author Douglas Adams didn’t live long enough to see the technological future he foretold become reality, or how his vision influenced his most famous fan",
                "url": "https://www.irishtimes.com/culture/tv-radio/2025/03/29/hitchhikers-guide-offered-glimpse-of-a-future-where-technology-would-mediate-almost-every-interaction/",
                "urlToImage": "https://www.irishtimes.com/resizer/v2/7VM5VSD5THPKV6GBNDYK7E4GIU.jpg?smart=true&auth=ccd5404efc21558d79bf3c38bcd70f9076d6426172611d5f75878c780dc3fdb8&width=1200&height=630",
                "publishedAt": "2025-03-29T05:00:00Z",
                "content": "When Elon Musk launched a Tesla car into space in 2018, a sign on the vehicles dashboard read, Dont panic. Stashed in the glovebox was a towel and a copy of a 1979 novel the future billionaire had fi… [+6464 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "Cnbc",
                "title": "Chinese EV giant BYD outpaces Tesla with annual sales of more than $100 billion",
                "description": "China’s BYD reported annual revenue of 777 billion yuan ($107 billion) for 2024, leapfrogging Tesla as competition between the two EV rivals heats up. “BYD has become an industry leader in every sector from batteries, electronics to new energy vehicles, break…",
                "url": "https://freerepublic.com/focus/f-news/4307477/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-29T04:49:43Z",
                "content": "Skip to comments.\r\nChinese EV giant BYD outpaces Tesla with annual sales of more than $100 billionCnbc ^\r\n | March 25, 2025\r\n | Sam Meredith \r\nPosted on 03/28/2025 9:49:43 PM PDT by Cronos\r\nChinas BY… [+2257 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "scmp.com",
                "title": "Sci-fi to reality: Chinese EV makers outpace Tesla in the autonomous-driving race",
                "description": "Last week, Yale Dong finally got his chance to test Tesla’s much-heralded Full Self-Driving (FSD) autonomous navigation feature in China. He did so in a US$32,100 Model 3.\nThe experience was underwhelming, the Shanghai resident said, as the Model 3 failed to …",
                "url": "https://biztoc.com/x/348d95ecdb34cf6f",
                "urlToImage": "https://biztoc.com/cdn/348d95ecdb34cf6f_s.webp",
                "publishedAt": "2025-03-29T04:18:08Z",
                "content": "Last week, Yale Dong finally got his chance to test Teslas much-heralded Full Self-Driving (FSD) autonomous navigation feature in China. He did so in a US$32,100 Model 3.The experience was underwhelm… [+134 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Daily Beast"
                },
                "author": "Catherine Bouris",
                "title": "Elon Musk’s Daughter Blasts Mars Colonization as a ‘Marketing Scheme’",
                "description": "Elon Musk’s Daughter Blasts Mars Colonization as a ‘Marketing Scheme’thedailybeast.com",
                "url": "https://www.thedailybeast.com/elon-musks-daughter-blasts-mars-colonization-as-a-marketing-scheme/",
                "urlToImage": "https://www.thedailybeast.com/resizer/v2/RZCPLPNSKJCDJMN24EKIINFW4A.jpg?smart=true&auth=830dd917795c07fbbe4490085c4adc9389de275e0dcd343da8f8c03a495c2a5f&width=1200&height=630",
                "publishedAt": "2025-03-29T04:01:29Z",
                "content": "In a follow-up to her recent feature in Teen Vogue, Elon Musks estranged daughter Vivian Wilson had her first ever live interview late Friday night, appearing on popular left-wing streamer Hasan Pike… [+3942 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "BusinessLine"
                },
                "author": "Reuters",
                "title": "Musk's xAI buys Musk's X social media platform for $33 billion",
                "description": "Elon Musk's xAI acquires X, formerly Twitter, for $33 billion, consolidating Musk's portfolio and advancing AI capabilities.",
                "url": "https://www.thehindubusinessline.com/info-tech/musks-xai-buys-musks-x-social-media-platform-for-33-billion/article69389059.ece",
                "urlToImage": "https://bl-i.thgim.com/public/incoming/6u3una/article69389070.ece/alternates/LANDSCAPE_1200/2025-02-12T160035Z_1255770736_RC2JSCAYGICU_RTRMADP_3_INDIA-USA-MODI-MUSK.JPG",
                "publishedAt": "2025-03-29T03:54:43Z",
                "content": "Elon Musk's xAI artificial intelligence firm has acquired Musk's X, the social media outfit formerly known as Twitter for $33 billion.\r\nThe all-stock deal announced on Friday consolidates two of Musk… [+2373 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "HuffPost"
                },
                "author": "Ap",
                "title": "Elon Musk Sells X To His Own xAI For $33 Billion In All-Stock Deal",
                "description": "Both companies are privately held, which means they are not required to disclose their finances to the public.",
                "url": "https://www.huffpost.com/entry/x-elon-musk-sale_n_67e728f4e4b0b1cf1ccbfe6c",
                "urlToImage": "https://img.huffingtonpost.com/asset/67e729361600002100884089.jpeg?cache=qYcwR6mtnE&ops=1200_630",
                "publishedAt": "2025-03-29T03:36:29Z",
                "content": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday.\r\nBoth companies are privately held, which m… [+2363 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "Dow Jones Futures: Trump Tariffs Slam Stock Market, With More Coming. Tesla Deliveries Loom. - Investor's Business Daily",
                "description": "Dow Jones Futures: Trump Tariffs Slam Stock Market, With More Coming. Tesla Deliveries Loom.Investor's Business Daily Stock market today: Dow drops 700 points, S&P 500, Nasdaq sink as Wall Street reels from tariff, inflation fearsYahoo Finance Inflation and f…",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=176853403",
                "urlToImage": null,
                "publishedAt": "2025-03-29T03:32:16Z",
                "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
                },
                {
                "source": {
                "id": null,
                "name": "Hip-Hop Wired"
                },
                "author": "Bernard \"Beanz\" Smalls",
                "title": "Elon Musk Claims He Sold X To xAI, The Artificial Intelligence He Founded, X Asks How Is This Not “Money Laundering?”",
                "description": "Elon Musk’s time as owner of X, formerly Twitter, is reportedly over, but before you celebrate, it sounds like his slimy tentacles will still be all over the platform. Spotted on the New York Times, Elon Musk claims he sold X to xAI, the artificial intelligen…",
                "url": "https://hiphopwired.com/playlist/elon-musk-sells-x-to-xai-money-laundering-reactions/",
                "urlToImage": "https://hiphopwired.com/wp-content/uploads/sites/43/2025/03/17432074525971.jpg",
                "publishedAt": "2025-03-29T03:24:19Z",
                "content": "HipHopWired Featured Video\r\nSource: Anna Barclay / Getty / Elon Musk / X\r\nElon Musk’s time as owner of X, formerly Twitter, is reportedly over, but before you celebrate, it sounds like his slimy tent… [+1575 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "investors.com",
                "title": "Dow Jones Futures: Trump Tariffs Slam Stock Market, With More Coming. Tesla Deliveries Loom",
                "description": "Access to this page has been denied because we believe you are using automation tools to browse the website.\nThis may happen as a result of the following:\n- Javascript is disabled or blocked by an extension (ad blockers for example)\n- Your browser does not su…",
                "url": "https://biztoc.com/x/b27b86faa7ebc15b",
                "urlToImage": "https://biztoc.com/cdn/928/og.png",
                "publishedAt": "2025-03-29T03:00:57Z",
                "content": "Access to this page has been denied because we believe you are using automation tools to browse the website.This may happen as a result of the following:- Javascript is disabled or blocked by an exte… [+147 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Mediaite"
                },
                "author": "Kipp Jones",
                "title": "Musk Calls Tim Walz ‘A Huge Jerk’ for Celebrating Tesla Stock Plunge: ‘What an Evil Thing to Do’",
                "description": "Elon Musk ripped Democratic Minnesota Governor Tim Walz as “evil” and not a “good person” during an interview that aired on Friday evening with Fox News anchor Bret Baier. Musk also said Walz’s comments about downloading an app on his phone to enjoy watching …",
                "url": "https://www.mediaite.com/tv/musk-calls-tim-walz-a-huge-jerk-for-celebrating-tesla-stock-plunge-what-an-evil-thing-to-do/",
                "urlToImage": "https://www.mediaite.com/wp-content/uploads/2025/03/Screenshot-2025-03-28-at-9-49-48-PM.jpeg",
                "publishedAt": "2025-03-29T02:56:51Z",
                "content": "Elon Musk ripped Democratic Minnesota Governor Tim Walz as “evil” and not a “good person” during an interview that aired on Friday evening with Fox News anchor Bret Baier.\r\nMusk also said Walz’s comm… [+1877 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Elon Musk says his companies are 'suffering' because of his work with the White House",
                "description": "Elon Musk, who runs Tesla, xAI, X, and SpaceX, has also been busy with his new role as a special government employee for the White House.\nKenny Holston/The New York Times\nElon Musk says his companies are \"suffering\" because of his work with the White House.\nH…",
                "url": "https://biztoc.com/x/076abf5009302300",
                "urlToImage": "https://biztoc.com/cdn/928/og.png",
                "publishedAt": "2025-03-29T02:49:53Z",
                "content": "Elon Musk, who runs Tesla, xAI, X, and SpaceX, has also been busy with his new role as a special government employee for the White House.Kenny Holston/The New York TimesElon Musk says his companies a… [+149 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "DW (English)"
                },
                "author": "Srinivas Mazumdaru",
                "title": "Elon Musk sells X to his AI company xAI",
                "description": "Musk said the move will \"unlock immense potential by blending xAI's advanced AI capability and expertise with X's massive reach.\" Tech billionaire Elon Musk's xAI artificial intelligence firm has acquired his social media company X, formerly known as Twitter,…",
                "url": "https://www.dw.com/en/elon-musk-sells-x-to-his-ai-company-xai/a-72079945",
                "urlToImage": "https://static.dw.com/image/70976241_6.jpg",
                "publishedAt": "2025-03-29T02:48:00Z",
                "content": "Tech billionaire Elon Musk's xAI artificial intelligence firm has acquired his social media company X, formerly known as Twitter, for $33 billion (30.5 billion).\r\nMusk announced the transaction in a … [+1981 chars]"
                },
                {
                "source": {
                "id": "business-insider",
                "name": "Business Insider"
                },
                "author": "lloydlee@insider.com (Lloyd Lee)",
                "title": "Elon Musk says his companies are 'suffering' because of his work with the White House",
                "description": "Elon Musk said in an interview that his White House role has been \"disadvantageous\" for his companies, pointing to recent attacks against Tesla.",
                "url": "https://www.businessinsider.com/elon-musk-companies-tesla-suffering-doge-white-house-employee-2025-3",
                "urlToImage": "https://i.insider.com/67e73cab69253ccddf9ab014?width=1200&format=jpeg",
                "publishedAt": "2025-03-29T02:43:35Z",
                "content": "Elon Musk said his companies are \"suffering\" due to his work with the Trump Administration, pointing to recent attacks against his EV company.\r\nIn the second half of a two-part interview on Fox News'… [+2639 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "semafor.com",
                "title": "Elon Musk is building an AI giant — and Tesla will be central",
                "description": "The News\nElon Musk’s move to combine the social media company X with his xAI puts an official corporate stamp on a de facto combination in which both companies already shared talent and resources in a drive to catch up in the hypercompetitive AI industry.\nThe…",
                "url": "https://biztoc.com/x/f43604b437d9d905",
                "urlToImage": "https://biztoc.com/cdn/f43604b437d9d905_s.webp",
                "publishedAt": "2025-03-29T02:38:37Z",
                "content": "The NewsElon Musks move to combine the social media company X with his xAI puts an official corporate stamp on a de facto combination in which both companies already shared talent and resources in a … [+140 chars]"
                },
                {
                "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
                },
                "author": "ABC News",
                "title": "Elon Musk's AI startup firm buys his own X social media platform",
                "description": "The all-stock deal combines two of Mr Musk's multiple portfolio companies and potentially eases Musk's ability to train his AI model known as Grok.",
                "url": "https://www.abc.net.au/news/2025-03-29/elon-musk-s-xai-x-deal/105112256",
                "urlToImage": "https://live-production.wcms.abc-cdn.net.au/039ba3257dc13686091c41208e85c53b?impolicy=wcms_watermark_news&cropH=820&cropW=1457&xPos=208&yPos=126&width=862&height=485&imformat=generic",
                "publishedAt": "2025-03-29T02:31:52Z",
                "content": "Elon Musk's artificial intelligence firm xAI has acquired his X, formerly known as Twitter, for around $52.3 billion, marking the latest twist in the billionaire's rapid consolidation of power.\r\nThe … [+3225 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Elon Musk Says Tesla Doesn't Need Lidar Because 'People Don't Shoot Lasers Out Of Their Eyes' After YouTubers Put His Cars Through Wylie E. Coyote Tests",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_ac8eeb44-963a-458b-b23b-a4ca64af4bf9",
                "urlToImage": null,
                "publishedAt": "2025-03-29T02:30:35Z",
                "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Business Today"
                },
                "author": "Business Today Desk",
                "title": "'You won't succeed by watching Elon Musk...': Techie spends ₹1.58 crore on a painful lesson",
                "description": "Pranjal’s truth is blunt: billionaire habits don’t guarantee your success. Morning routines, motivational tips, and legendary work ethics are often products, not causes, of wealth.",
                "url": "https://www.businesstoday.in/latest/trends/story/you-wont-succeed-by-watching-elon-musk-techie-spends-rs158-crore-on-a-painful-lesson-469895-2025-03-29",
                "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202503/67e75afc406b0-the-question-left-pranjal-speechless-and-forced-him-into-a-painful-reckoning-while-i-was-studying-292909285-16x9.jpg",
                "publishedAt": "2025-03-29T02:29:23Z",
                "content": "Pranjal G was captivated by Elon Musk. For four years, the AI startup founder devoured every word and move of the billionaire entrepreneur, convinced this obsession was the blueprint for success. \r\nT… [+2052 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "Gateway Pundit",
                "title": "Democrat New York State Senator Introduces Bill That Would Ban Tesla Dealerships in the State",
                "description": "Patricia Fahy, a Democrat state senator in New York is introducing legislation that would effectively ban Tesla dealerships in the state. This is the same party that has tried to force Americans to buy electric cars. Now this Democrat is trying to make it imp…",
                "url": "https://freerepublic.com/focus/f-bloggers/4307459/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-29T02:26:59Z",
                "content": "Skip to comments.\r\nDemocrat New York State Senator Introduces Bill That Would Ban Tesla Dealerships in the StateGateway Pundit ^\r\n | March 28, 2025\r\n | Mike LaChance\r\nPosted on 03/28/2025 7:26:59 PM … [+5868 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Common Dreams"
                },
                "author": "Brett Wilkins",
                "title": "Wisconsin AG Sues to Block Musk's Multimillion Dollar Election Eve Voter Bribe",
                "description": "Democratic Wisconsin Attorney General Josh Kaul \nfiled a lawsuit Friday seeking to stop Elon Musk—the world's richest person and a senior adviser to President Donald Trump—from handing out $1 million checks to voters this weekend in an apparent blatant violat…",
                "url": "https://www.commondreams.org/news/wisconsin-attorney-general-sues-musk",
                "urlToImage": "https://www.commondreams.org/media-library/image.jpg?id=59747389&width=1200&height=600&coordinates=0%2C84%2C0%2C85",
                "publishedAt": "2025-03-29T02:17:55Z",
                "content": "Democratic Wisconsin Attorney General Josh Kaul \r\nfiled a lawsuit Friday seeking to stop Elon Muskthe world's richest person and a senior adviser to President Donald Trumpfrom handing out $1 million … [+2908 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "The Daily Caller"
                },
                "author": "Hailey Gomez",
                "title": "John Kennedy Slams Govt Spending, Says It’d Be Better Spent On ‘Scratch Tickets and Blackjack’ Instead Of Waste",
                "description": "Sen. Kennedy called out the government's wasteful spending, stating it would've been better if it were spent on \"scratch tickets and blackjack.\"",
                "url": "https://dailycaller.com/2025/03/28/john-kennedy-government-wasteful-spending-elon-musk-doge/",
                "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2025/03/Screenshot-2025-03-28-at-5.17.00%e2%80%afPM-e1743207506798.png",
                "publishedAt": "2025-03-29T02:17:25Z",
                "content": "Republican Louisiana Sen. John Kennedy called out the government’s wasteful spending Friday evening on Fox News, saying it would’ve been better if it were spent on “scratch tickets and blackjack.”\r\nS… [+3048 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "youtube.com",
                "title": "Things Are Bad At Tesla And They're About To Get Much Worse",
                "description": "The EV company's sales are tanking in all major markets as its Chinese rivals are surging. But Tesla's problems are just beginning ...",
                "url": "https://biztoc.com/x/4641c29a0a508f91",
                "urlToImage": "https://biztoc.com/cdn/4641c29a0a508f91_s.webp",
                "publishedAt": "2025-03-29T02:07:14Z",
                "content": "The EV company's sales are tanking in all major markets as its Chinese rivals are surging. But Tesla's problems are just beginning ...\r\nThis story appeared on youtube.com, 2025-03-28 22:32:36."
                },
                {
                "source": {
                "id": null,
                "name": "ABC 12 News"
                },
                "author": "Chris Delmas/afp/getty Images/file Via Cnn Newsource",
                "title": "Elon Musk says he sold X to his AI company",
                "description": "Elon Musk on Friday evening announced he has sold his social media company, X, to xAI, his artificial intelligence company. xAI will pay $45 billion for X, slightly more than",
                "url": "https://www.abc12.com/news/business/elon-musk-says-he-sold-x-to-his-ai-company/article_37d9b9ad-1a3a-53d2-8ce2-d88516a88cd6.html",
                "urlToImage": "https://bloximages.newyork1.vip.townnews.com/abc12.com/content/tncms/assets/v3/editorial/b/84/b844a4b5-9e4b-502a-92ec-1e5824138414/67e72a3a40f53.image.jpg?crop=1600%2C840%2C0%2C29&resize=1200%2C630&order=crop%2Cresize",
                "publishedAt": "2025-03-29T02:06:13Z",
                "content": "Elon Musk on Friday evening announced he has sold his social media company, X, to xAI, his artificial intelligence company. xAI will pay $45 billion for X, slightly more than Musk paid for it in 2022… [+4639 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": null,
                "title": "AMERICA PRAYER VIGIL - MARCH 29, 2025",
                "description": "Join with fellow FREEPERS to pray for AMERICA: For those in Authority in Government, Family, Military, Business, Agri-Business; End to Sex Slavery; Healthcare, Education, Churches, and the Media. This is the confidence we have in approaching God: that if we a…",
                "url": "https://freerepublic.com/focus/f-religion/4307455/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-29T02:05:32Z",
                "content": "Join with fellow FREEPERS to pray for AMERICA: For those in Authority in Government, Family, Military, Business, Agri-Business; End to Sex Slavery; Healthcare, Education, Churches, and the Media. Thi… [+4757 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Fark.com"
                },
                "author": null,
                "title": "It's Global Tesla Takedown Day of protest this Saturday. Bring a sign or bring an effigy [Cool]",
                "description": "It's Global Tesla Takedown Day of protest this Saturday. Bring a sign or bring an effigy",
                "url": "https://www.fark.com/comments/13614218/Its-Global-Tesla-Takedown-Day-of-protest-this-Saturday-Bring-a-sign-bring-an-effigy",
                "urlToImage": "https://usrimg-full.fark.net/L/Ll/fark_Ll6oOmwo6i_lgL4KBXpEI7m4uCs.jpg?AWSAccessKeyId=JO3ELGV4BGLFW7Y3EZXN&Expires=1743393600&Signature=40WOgJxZhjaQUdEyjJCkCDLc54k%3D",
                "publishedAt": "2025-03-29T02:05:00Z",
                "content": "Cyberluddite:My adult daughter decided to attend a couple of Tesla protests in recent weeks, and asked me to help her come up with signs.  For the first one, we came up with \"Our grandparents didn't … [+468 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "New York Post"
                },
                "author": "Victor Nava",
                "title": "Elon Musk on why being in the government is ‘disadvantageous’ — as he blasts ‘jerk’ Tim Walz for mocking Tesla’s falling stock",
                "description": "“My companies are suffering because I'm in the government. Do you think it helps sales if, you know, dealerships are being fire bombed? Of course, not.\"",
                "url": "https://nypost.com/2025/03/28/us-news/elon-musk-blasts-jerk-tim-walz-for-mocking-teslas-falling-stock/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/03/elon-musk-doge-team-fnc-101300498.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2025-03-29T01:52:51Z",
                "content": "Billionaire entrepreneur Elon Musk lamented Friday that his role as DOGE chief actually puts his companies at a disadvantage as he also took a shot at “jerk” Tim Walz after the failed veep contender … [+3115 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Livemint"
                },
                "author": "Swastika Das Sharma",
                "title": "Elon Musk sells X to xAI: What is xAI? What does it do? Who owns the company? EXPLAINED",
                "description": "X sold to xAI: Elon Musk said in a post on X that the move will “unlock immense potential by blending xAI's advanced AI capability and expertise with X's massive reach.”&nbsp;",
                "url": "https://www.livemint.com/companies/news/elon-musk-sells-x-to-xai-what-is-xai-what-does-it-do-who-owns-the-company-explained-11743210156874.html",
                "urlToImage": "https://www.livemint.com/lm-img/img/2025/03/29/1600x900/XAI-M-A-X-2_1743211784031_1743211805671.JPG",
                "publishedAt": "2025-03-29T01:33:24Z",
                "content": "In a surprise move, Elon Musk on Friday revealed that he had sold social media site X to xAI in a $33 billion deal. The artificial intelligence (AI) company has acquired X in an all-stock deal.\r\nMusk… [+2632 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "Discern Report",
                "title": "Why xAI Acquired X (According to Grok)",
                "description": "Editor’s Note: Below is Grok, the chatbot for xAI that is available on X, answering the question about why xAI just acquire X. For those unfamiliar with how chatbot articles work, they take data available to them through their various datasets and compile wha…",
                "url": "https://freerepublic.com/focus/f-chat/4307446/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-29T01:20:40Z",
                "content": "Skip to comments.\r\nWhy xAI Acquired X (According to Grok)Discern Report ^\r\n | March 28, 2025\r\n | Staff\r\nPosted on 03/28/2025 6:20:40 PM PDT by Red Badger\r\nEditors Note: Below is Grok, the chatbot for… [+6802 chars]"
                },
                {
                "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
                },
                "author": "AP",
                "title": "Elon Musk sells X to his own xAI for $33 billion in all-stock deal",
                "description": "Elon Musk has sold social media platform X to his xAI company in a $33 billion all-stock deal. The acquisition aims to merge xAI's AI expertise with X's vast reach. Musk values xAI at $80 billion and X at $33 billion, enhancing user experiences with advanced …",
                "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-sells-x-to-his-own-xai-for-33-billion-in-all-stock-deal/articleshow/119683244.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-119683266,width-1200,height-630,imgsize-634211,overlay-ettech/articleshow.jpg",
                "publishedAt": "2025-03-29T01:08:23Z",
                "content": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday. Both companies are privately held, which me… [+1050 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Japan Today"
                },
                "author": null,
                "title": "Elon Musk sells X to his own xAI for $33 billion in all-stock deal",
                "description": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday.  Both companies are privately held, which means they are not required to disclose their finances to the…",
                "url": "https://japantoday.com/category/tech/elon-musk-sells-x-to-his-own-xai-for-33-billion-in-all-stock-deal",
                "urlToImage": null,
                "publishedAt": "2025-03-29T01:07:17Z",
                "content": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday. \r\nBoth companies are privately held, which … [+1387 chars]"
                },
                {
                "source": {
                "id": "abc-news",
                "name": "ABC News"
                },
                "author": "JILL COLVIN Associated Press, SCOTT BAUER Associated Press",
                "title": "Is Elon Musk skirting election law in the Wisconsin Supreme Court race?",
                "description": "Billionaire Elon Musk’s unprecedented efforts to bolster the conservative candidate in next week’s hotly contested Wisconsin Supreme Court race have run into legal hot water amid accusations that he had broken state election law",
                "url": "https://abcnews.go.com/US/wireStory/elon-musk-skirting-election-law-wisconsin-supreme-court-120281419",
                "urlToImage": "https://i.abcnewsfe.com/a/0bc5a198-2bad-4bcf-baf4-85d076bf9e75/wirestory_3501e3c50d6c55e585d67da6b5513208_16x9.jpg?w=1600",
                "publishedAt": "2025-03-29T01:02:25Z",
                "content": "MADISON, Wis. -- Billionaire Elon Musk's unprecedented efforts to bolster the conservative candidate in next week's hotly contested Wisconsin Supreme Court race ran into legal hot water Friday amid a… [+7776 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "Breitbart",
                "title": "Trump in Talks with Johnson, Thune About Making Interest Payments on American-Made Cars Tax Deductible",
                "description": "President Donald Trump announced Friday that he has spoken with House Speaker Mike Johnson (R-LA) and Senate Majority Leader John Thune (R-SD) about making interest payments on loans for American-made cars tax deductible. While speaking with reporters in the …",
                "url": "https://freerepublic.com/focus/f-news/4307431/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-29T00:45:22Z",
                "content": "Skip to comments.\r\nTrump in Talks with Johnson, Thune About Making Interest Payments on American-Made Cars Tax DeductibleBreitbart ^\r\n | March 28th, 2025\r\n | Nick Gilbertson\r\nPosted on 03/28/2025 5:4… [+3021 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CNBC"
                },
                "author": null,
                "title": "Elon Musk must face Twitter shareholders’ lawsuit over alleged securities fraud",
                "description": "A proposed class-action lawsuit against Elon Musk and his family office Excession can proceed in federal court, a judge ruled Friday.",
                "url": "https://www.cnbc.com/2025/03/28/elon-musk-must-face-twitter-shareholders-lawsuit-over-alleged-securities-fraud.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/107044713-1649676192257-107044713-1649676075485-gettyimages-1239883418-porzycki-economic220409_npT8D.jpg?v=1650040148&w=1920&h=1080",
                "publishedAt": "2025-03-29T00:37:57Z",
                "content": "A proposed class-action lawsuit against Elon Musk and his family office Excession can proceed in federal court, a judge ruled Friday, after the tech centi-billionaire sought to have the case dismisse… [+2138 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "thehill.com",
                "title": "Democrats ask ethics office to investigate Lutnick Tesla promotion",
                "description": "More than a dozen Democratic lawmakers asked the Office of Government Ethics on Thursday to open an investigation into Commerce Secretary Howard Lutnick’s promotion of Tesla stock. \nRep. Maxine Waters (D-Calif.), Sen. Elizabeth Warren (D-Mass.) and 13 other D…",
                "url": "https://biztoc.com/x/e59529ce0d97f208",
                "urlToImage": "https://biztoc.com/cdn/e59529ce0d97f208_s.webp",
                "publishedAt": "2025-03-29T00:25:36Z",
                "content": "More than a dozen Democratic lawmakers asked the Office of Government Ethics on Thursday to open an investigation into Commerce Secretary Howard Lutnicks promotion of Tesla stock. Rep. Maxine Waters … [+143 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Eonline.com"
                },
                "author": null,
                "title": "Elon Musk Sells X, Formerly Twitter, for $33 Billion to His AI Startup",
                "description": "A little bird told us more changes are afoot for the company formerly known as Twitter.\nElon Musk—who bought Twitter in 2022 and changed the social media platform’s name to X the following...",
                "url": "https://www.eonline.com/news/1415458/elon-musk-sells-x-formerly-twitter-for-s33-billion-to-his-ai-startup",
                "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2024106/cr_1200x1200-241106042429-GettyImages-2181049764.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
                "publishedAt": "2025-03-29T00:11:20Z",
                "content": "Elon and the singer dated on-and-off for four years, starting in 2018. In September 2021, Elon told Page Six that he and Grimes \"are, I'd say, probably semi-separated,\" adding, \"It's mostly that my w… [+1265 chars]"
                },
                {
                "source": {
                "id": "marca",
                "name": "Marca"
                },
                "author": "LW",
                "title": "Elon Musk's empire snags X: His control soars, what's he cooking?",
                "description": "Elon Musk just dropped a bombshell that&apos;s shaking up the tech world-his AI powerhouse, xAI, has scooped up X, the social media platform formerly known as Twitter, in a massive",
                "url": "https://www.marca.com/en/technology/2025/03/29/67e73a34e2704e36338b458c.html",
                "urlToImage": "https://phantom-marca.uecdn.es/fef2c799b03a733ea50e921c27d3f446/resize/1200/f/webp/assets/multimedia/imagenes/2024/11/15/17317101861760.jpg",
                "publishedAt": "2025-03-29T00:10:06Z",
                "content": "Elon Musk just dropped a bombshell that's shaking up the tech world-his AI powerhouse, xAI, has scooped up X, the social media platform formerly known as Twitter, in a massive $45 billion all-stock d… [+2230 chars]"
                },
                {
                "source": {
                "id": "cbc-news",
                "name": "CBC News"
                },
                "author": null,
                "title": "Tesla protests planned across Metro Vancouver as police investigate rise in vandalism",
                "description": "Vancouver police say they're deploying more than 130 additional officers this weekend ahead of planned anti-Tesla protests and amid an ongoing spike in politically motivated vandalism targeting the electric carmaker.",
                "url": "https://www.cbc.ca/news/canada/british-columbia/vpd-to-deploy-over-100-officers-tesla-protests-1.7496420",
                "urlToImage": "https://i.cbc.ca/1.7485263.1743206023!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_1180/tesla-protests-20250316.jpg?im=Resize%3D620",
                "publishedAt": "2025-03-29T00:09:08Z",
                "content": "Vancouver police say they're deploying more than 130 additional officers this weekend ahead of planned anti-Tesla protests and amid an ongoing spike in politically motivated vandalism targeting the e… [+4728 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "Fox News",
                "title": "Elon Musk reveals what keeps him up at night amid ongoing DOGE mission",
                "description": "Department of Government Efficiency (DOGE) head Elon Musk shared his concerns for the country and future generations during the second installment of his exclusive interview with Fox News chief political anchor Bret Baier. \"Well, there's a lot of things that …",
                "url": "https://freerepublic.com/focus/f-news/4307423/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-29T00:03:39Z",
                "content": "Skip to comments.\r\nElon Musk reveals what keeps him up at night amid ongoing DOGE missionFox News ^\r\n | Madeline Coggins \r\nPosted on 03/28/2025 5:03:39 PM PDT by RoosterRedux\r\nDepartment of Governmen… [+2405 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Sky.com"
                },
                "author": null,
                "title": "Day 69: Vance visits Greenland - to a frosty reception",
                "description": " Follow Trump 100 on your podcast app ",
                "url": "https://news.sky.com/story/trump-100-day-69-vance-visits-greenland-to-a-frosty-reception-13337652",
                "urlToImage": "https://e3.365dm.com/25/03/1600x900/skynews-trump-trump-100_6869518.jpg?20250328141734",
                "publishedAt": "2025-03-29T00:01:00Z",
                "content": "Follow Trump 100 on your podcast app \r\nVice president JD Vance has been in Greenland, visiting a US military base at Pituffik. It plays a key role in missile defence and surveillance across the Arcti… [+782 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "BetaNews"
                },
                "author": "Brian Fagioli",
                "title": "Elon Musk merges xAI with X to distract from Twitter debt disaster and Donald Trump backlash",
                "description": "Elon Musk just announced a wild move that might be less about innovation and more about survival. In a surprise announcement, Musk revealed that his AI company xAI has officially merged with X (formerly known as Twitter) in an all-stock transaction. The Tesla…",
                "url": "https://betanews.com/2025/03/28/elon-musk-xai-x-merger-twitter-trump-backlash-debt/",
                "urlToImage": "https://betanews.com/wp-content/uploads/2025/03/IMG_3008-50x50.jpeg",
                "publishedAt": "2025-03-28T23:51:12Z",
                "content": "Elon Musk just announced a wild move that might be less about innovation and more about survival. In a surprise announcement, Musk revealed that his AI company xAI has officially merged with X (forme… [+1620 chars]"
                },
                {
                "source": {
                "id": "abc-news",
                "name": "ABC News"
                },
                "author": "BARBARA ORTUTAY AP technology writer",
                "title": "Elon Musk sells X to his own xAI for $33 billion in all-stock deal",
                "description": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday",
                "url": "https://abcnews.go.com/Technology/wireStory/elon-musk-sells-xai-33-billion-stock-deal-120279788",
                "urlToImage": "https://i.abcnewsfe.com/a/27e9d9bb-02b7-4c8c-b41e-73dea8cc60c0/wirestory_b245f463076ac9b72c41f92160dc77eb_16x9.jpg?w=1600",
                "publishedAt": "2025-03-28T23:35:06Z",
                "content": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday. \r\nBoth companies are privately held, which … [+1232 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Rolling Stone"
                },
                "author": "Miles Klee",
                "title": "Elon Musk Says His AI Company Acquired X at Valuation of $33 Billion",
                "description": "Elon Musk has announced the acquisition of X, his social media platform, by xAI, his AI company, in what critics say is an effort to bail himself out",
                "url": "http://www.rollingstone.com/culture/culture-news/elon-musk-ai-company-acquired-x-33-billion-1235306228/",
                "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2025/03/elon-musk-twitter-ai.jpg?w=1600&h=900&crop=1",
                "publishedAt": "2025-03-28T23:31:50Z",
                "content": "Since buying Twitter and rebranding it as X, tech oligarch Elon Musk has sought to bring the social media platform into alignment with xAI, his artificial intelligence venture. Now, he says, that com… [+3818 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Decrypt"
                },
                "author": "Jason Nelson",
                "title": "Elon Musk Folds X Into xAI, Creating a $113 Billion Juggernaut",
                "description": "The merger between Elon Musk's X and xAI creates a closed loop of 600 million user inputs, model training, and distribution.",
                "url": "https://decrypt.co/312221/elon-musk-x-xai-113-billion-juggernaut",
                "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2023/07/Elon-Musk-X-App-RKO-gID_7.jpg",
                "publishedAt": "2025-03-28T23:28:29Z",
                "content": "In a consolidation of his tech businesses, X owner Elon Musk said in a post on Friday that xAI, the developers of Grok, had acquired X (formerly Twitter) in an all-stock transaction. According to Mus… [+3065 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "WSLS 10"
                },
                "author": "Barbara Ortutay",
                "title": "Elon Musk sells X to his own xAI for $33 billion in all-stock deal",
                "description": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday.",
                "url": "https://www.wsls.com/business/2025/03/28/elon-musk-sells-x-to-his-own-xai-for-33-billion-in-all-stock-deal/",
                "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/ZVH5VMYALBE3RKWWWD7SWED26I.jpg?_a=DATAdtfiZAA0",
                "publishedAt": "2025-03-28T23:26:00Z",
                "content": "Elon Musk has sold social media site X to his own xAI artificial intelligence company in a $33 billion all-stock deal, the billionaire announced on Friday. \r\nBoth companies are privately held, which … [+1385 chars]"
                },
                {
                "source": {
                "id": "fox-news",
                "name": "Fox News"
                },
                "author": "Madeline Coggins",
                "title": "Elon Musk reveals what keeps him up at night amid ongoing DOGE mission",
                "description": "Department of Government Efficiency head Elon Musk sat down with Fox News chief political anchor Bret Baier for part two of his exclusive interview on 'Special Report.'",
                "url": "https://www.foxnews.com/media/elon-musk-reveals-what-keeps-him-up-night-amid-ongoing-doge-mission",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/03/video-2025-03-28t183349.825.jpg",
                "publishedAt": "2025-03-28T23:24:47Z",
                "content": "Department of Government Efficiency (DOGE) head Elon Musk shared his concerns for the country and future generations during the second installment of his exclusive interview with Fox News chief polit… [+3401 chars]"
                },
                {
                "source": {
                "id": "fox-news",
                "name": "Fox News"
                },
                "author": "Adam Sabes",
                "title": "Tesla Cybertruck vandals caught on video scrawling 'Nazis' and swastika: NYPD",
                "description": "The New York Police Department Hate Crime Task Force is investigating after two men were caught on camera carving \"Nazis\" and a swastika onto a Cybertruck.",
                "url": "https://www.foxnews.com/us/tesla-cybertruck-vandals-caught-video-scrawling-nazis-swastika-nypd",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/03/81-pct.-crim-mis-hate-crime-rma-731-25-video-2_2.gif",
                "publishedAt": "2025-03-28T23:20:15Z",
                "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+2841 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "theverge.com",
                "title": "Elon Musk threatens to ‘go after’ Tesla critics who push ‘propaganda’",
                "description": "As protests against Tesla continue to grow, Elon Musk is threatening to “go after” the people who say or post anything negative about the company — which he labels “propaganda.”\nMusk threatens to sic the government on people ‘pushing’ Tesla ‘propaganda’\nSelf-…",
                "url": "https://biztoc.com/x/c78eb4aa2d6a8afd",
                "urlToImage": "https://biztoc.com/cdn/c78eb4aa2d6a8afd_s.webp",
                "publishedAt": "2025-03-28T23:19:35Z",
                "content": "As protests against Tesla continue to grow, Elon Musk is threatening to go after the people who say or post anything negative about the company which he labels propaganda.Musk threatens to sic the go… [+142 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Bangkok Post"
                },
                "author": "Nuntawun Polkuamdee & Nareerat Wiriyapong",
                "title": "Regional shares sink as trade war worries mount",
                "description": "<p><strong>RECAP: </strong>Asian stocks slid yesterday with heavy selling in South Korea and Japan, while safe-haven gold traded at a record high as the latest tariff salvo from US President Donald Trump stoked investor worries of an all-out trade war.</p>",
                "url": "https://www.bangkokpost.com/business/general/2990262/regional-shares-sink-as-trade-war-worries-mount",
                "urlToImage": "https://static.bangkokpost.com/media/content/dcx/2025/03/29/5530622_700.jpg",
                "publishedAt": "2025-03-28T23:12:00Z",
                "content": "RECAP: Asian stocks slid yesterday with heavy selling in South Korea and Japan, while safe-haven gold traded at a record high as the latest tariff salvo from US President Donald Trump stoked investor… [+8539 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Raw Story"
                },
                "author": "Daniel Hampton",
                "title": "'My companies are suffering!' Musk companies are tanking amid mass DOGE cuts",
                "description": "Tech billionaire Elon Musk bemoaned Friday on Fox News that \"humanity is dying\" — and so are his companies.Part two of Musk's interview with anchor Bret Baier aired Friday evening, in which the host asked Musk what keeps him up at night After a long pause, Mu…",
                "url": "https://www.rawstory.com/elon-musk-doge-2671629026/",
                "urlToImage": "https://www.rawstory.com/media-library/file-photo-a-3d-printed-miniature-model-of-elon-musk-and-the-x-logo-are-seen-in-this-illustration-taken-january-23-2025-reute.jpg?id=59747307&width=1200&height=600&coordinates=0%2C250%2C0%2C251",
                "publishedAt": "2025-03-28T23:04:17Z",
                "content": "Tech billionaire Elon Musk bemoaned Friday on Fox News that \"humanity is dying\" and so are his companies.\r\nPart two of Musk's interview with anchor Bret Baier aired Friday evening, in which the host … [+2877 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Legalinsurrection.com"
                },
                "author": "Elizabeth Stauffer",
                "title": "Dem Rep Slams FBI’s Tesla Investigation as ‘Lawfare’ and ‘Political Weaponization’",
                "description": "\"Trump uses his official authority to defend his benefactor Elon Musk. The FBI then creates a task force to use our law enforcement to 'crack down' on adversaries of Musk’s.\"\nThe post Dem Rep Slams FBI’s Tesla Investigation as ‘Lawfare’ and ‘Political Weaponi…",
                "url": "https://legalinsurrection.com/2025/03/dem-rep-slams-fbis-tesla-investigation-as-lawfare-and-political-weaponization/",
                "urlToImage": "https://legalinsurrection.com/wp-content/uploads/2024/11/Dan-Goldman.jpg",
                "publishedAt": "2025-03-28T23:00:08Z",
                "content": "On Monday, Fox News reported that the FBI had formed a new task force to address the rising number of attacks on Tesla dealerships, vehicles, and charging stations across the country. What initially … [+4944 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "iPhone in Canada"
                },
                "author": "John Quintet",
                "title": "Elon Musk’s xAI Acquires X in Major Deal—‘Only the Beginning’",
                "description": "Elon Musk’s xAI, his artificial intelligence company, has acquired X, in an all-stock transaction, according to an announcement on Friday afternoon. The deal values xAI at $80 billion and X at $33 billion, after accounting for X’s $12 billion debt. That’s jus…",
                "url": "https://www.iphoneincanada.ca/2025/03/28/xai-acquires-x-beginning/",
                "urlToImage": "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
                "publishedAt": "2025-03-28T22:59:26Z",
                "content": "Elon Musks xAI, his artificial intelligence company, has acquired X, in an all-stock transaction, according to an announcement on Friday afternoon.\r\nThe deal values xAI at $80 billion and X at $33 bi… [+2049 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "KQED"
                },
                "author": "Scott Shafer",
                "title": "Targeting Teslas and Democrats’ Introspection on “Abundance”",
                "description": "As Elon Musk’s Department of Government Efficiency guts the federal workforce, Tesla’s electric cars have a major brand problem, triggering protests at Tesla dealerships and reports of vandalism of Tesla cars. Scott, Marisa and Guy discuss the fallout and the…",
                "url": "https://www.kqed.org/news/12033526/targeting-teslas-and-democrats-introspection-on-abundance",
                "urlToImage": "https://ww2.kqed.org/app/uploads/sites/10/2020/05/GettyImages-1208184787-1020x679.jpg",
                "publishedAt": "2025-03-28T22:57:07Z",
                "content": "As Elon Musk’s Department of Government Efficiency guts the federal workforce, Tesla’s electric cars have a major brand problem, triggering protests at Tesla dealerships and reports of vandalism of T… [+254 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Memeorandum.com"
                },
                "author": null,
                "title": "Elon Musk stepping down from DOGE in May. Here's what he said (Yahoo News)",
                "description": "Yahoo News:\nElon Musk stepping down from DOGE in May. Here's what he said  —  Elon Musk may be getting out of DOGE.  —  On Thursday, Musk said he plans to step down from his role in Donald Trump's administration this spring.  —  The head of Tesla and X owner …",
                "url": "https://www.memeorandum.com/250328/p133",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/C6LO0ki7fbcE4I6LcP.AbQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/app-com-asbury-park-press/a6a568289e0abd5e54b4dac495ad74a5",
                "publishedAt": "2025-03-28T22:50:08Z",
                "content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Slashdot.org"
                },
                "author": "feedfeeder",
                "title": "xAI, Elon Musk's AI company, just purchased X, Elon Musk's social media company",
                "description": "Elon Musk's AI company, xAI, has purchased X, according to a post shared by Musk. Besides their similar names and owner, the companies are already connected through xAI's chatbot Grok, which is integrated into X.\nX was acquired by xAI through an all-stock tra…",
                "url": "https://slashdot.org/firehose.pl?op=view&amp;id=176851469",
                "urlToImage": null,
                "publishedAt": "2025-03-28T22:32:33Z",
                "content": "Elon Musk's AI company, xAI, has purchased X, according to a post shared by Musk. Besides their similar names and owner, the companies are already connected through xAI's chatbot Grok, which is integ… [+1438 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "New York Post"
                },
                "author": "Victor Davis Hanson",
                "title": "Democrats’ response to losing? Profanity chic and terrorist porn",
                "description": "Democrats could've stopped the hemorrhaging of their base by moving toward the center or even worked with Trump.",
                "url": "https://nypost.com/2025/03/28/opinion/democrats-response-to-losing-profanity-chic-and-terrorist-porn/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/03/111doeldoel.jpg?quality=75&strip=all&w=1024",
                "publishedAt": "2025-03-28T22:29:25Z",
                "content": "The Democratic Party is polling about 27% approval and sinking.\r\nIn 2024, it lost the White House, the House of Representatives, the Senate and both the popular vote and the Electoral College, 312-22… [+4958 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Bringatrailer.com"
                },
                "author": "bringatrailer",
                "title": "2019 Tesla Model X P100D",
                "description": "This 2019 Tesla Model X P100D was purchased new by the seller and is finished in Pearl White Multi-Coat over black synthetic leather upholstery. It is powered by dual three-phase AC induction motors driving all four wheels through a single-speed direct-drive …",
                "url": "https://bringatrailer.com/listing/2019-tesla-model-x-3/",
                "urlToImage": "https://bringatrailer.com/wp-content/uploads/2025/03/2019_tesla_model-x_2019_tesla_model-x_9f78395f-1320-4217-a4f3-ea953d4dce2c-D0xax7-76313-76314-scaled.jpg",
                "publishedAt": "2025-03-28T22:14:49Z",
                "content": "This 2019 Tesla Model X P100D was purchased new by the seller and is finished in Pearl White Multi-Coat over black synthetic leather upholstery. It is powered by dual three-phase AC induction motors … [+2740 chars]"
                },
                {
                "source": {
                "id": "nbc-news",
                "name": "NBC News"
                },
                "author": "Allan Smith",
                "title": "The White House's 'Barstool' problem",
                "description": "Dave Portnoy, a Trump supporter and the founder of Barstool Sports, went viral for his blistering critique of the administration’s group chat debacle",
                "url": "https://www.nbcnews.com/politics/trump-administration/white-house-barstool-problem-dave-portnoy-rcna198409",
                "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250328-dave-portnoy-mb-1237-4b7260.jpg",
                "publishedAt": "2025-03-28T22:14:16Z",
                "content": "One of the most viral responses to the Trump administrations Signal chat debacle this week came not from a lawmaker or military expert, but from a man who rates pizza slices after taking a single bit… [+8204 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Electrek"
                },
                "author": "Peter Johnson",
                "title": "Here are the cheapest EVs we could find for lease at under $300/month right now [Updated]",
                "description": "Spring is finally here, and so are some solid EV lease deals. Right now, a few EVs are going for under $300 a month. Here are the cheapest EVs we could find this March.\n\n\n\n more…",
                "url": "http://electrek.co/2025/03/28/cheapest-evs-lease-march-under-300-month-update/",
                "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2025/03/Cheapest-EVs-lease-March-3.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2025-03-28T22:03:48Z",
                "content": "Spring is finally here, and so are some solid EV lease deals. Right now, a few EVs are going for under $300 a month. Here are the cheapest EVs we could find this March.\r\nAfter a record year with over… [+7445 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "investors.com",
                "title": "Tesla CEO Elon Musk Says xAI Has Bought X In Deal That Values His Social Site At $33 Billion",
                "description": "Tesla CEO Elon Musk said his artificial intelligence startup xAI has bought his social site in a stock deal valuing X at $33 billion.\nThe post Tesla CEO Elon Musk Says xAI Has Bought X In Deal That Values His Social Site At $33 Billion appeared first on Inves…",
                "url": "https://biztoc.com/x/576a78782a661315",
                "urlToImage": "https://biztoc.com/cdn/928/og.png",
                "publishedAt": "2025-03-28T22:02:22Z",
                "content": "Tesla CEO Elon Musk said his artificial intelligence startup xAI has bought his social site in a stock deal valuing X at $33 billion.The post Tesla CEO Elon Musk Says xAI Has Bought X In Deal That Va… [+139 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Freerepublic.com"
                },
                "author": "We Got Receipts youtube",
                "title": "Tesla Vandals Caught In The FUNNIEST WAYS!",
                "description": "They don't understand Sentry mode...",
                "url": "https://freerepublic.com/focus/f-chat/4307397/posts",
                "urlToImage": null,
                "publishedAt": "2025-03-28T21:56:14Z",
                "content": "Skip to comments.\r\nTesla Vandals Caught In The FUNNIEST WAYS!We Got Receipts youtube ^\r\n | March 28, 2025\r\n | We Got Receipts\r\nPosted on 03/28/2025 2:56:14 PM PDT by Morgana\r\nThey don't understand Se… [+1180 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "msnbc.com",
                "title": "Ahead of Tesla protests, Musk threatens his company’s critics",
                "description": "During an interview with Fox News, Elon Musk, vowed to sic the federal government on his critics ahead of a weekend when Tesla protests are scheduled in more than 200 locations.",
                "url": "https://biztoc.com/x/9ae545ac889141cb",
                "urlToImage": "https://biztoc.com/cdn/9ae545ac889141cb_s.webp",
                "publishedAt": "2025-03-28T21:51:15Z",
                "content": "During an interview with Fox News, Elon Musk, vowed to sic the federal government on his critics ahead of a weekend when Tesla protests are scheduled in more than 200 locations.\r\nThis story appeared … [+33 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "techcrunch.com",
                "title": "‘Tesla Takedown’ protesters are planning a global day of action on March 29, and things might get ugly",
                "description": "‘Tesla Takedown’ organizers have promised their biggest day of global action this weekend, encouraging thousands to protest outside Tesla showrooms, dealerships, and even charging stations to peacefully object to Elon Musk’s role in slashing government spendi…",
                "url": "https://biztoc.com/x/c69580bb0e7a8776",
                "urlToImage": "https://biztoc.com/cdn/c69580bb0e7a8776_s.webp",
                "publishedAt": "2025-03-28T21:51:14Z",
                "content": "Tesla Takedown organizers have promised their biggest day of global action this weekend, encouraging thousands to protest outside Tesla showrooms, dealerships, and even charging stations to peacefull… [+142 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CNBC"
                },
                "author": null,
                "title": "Elon Musk says xAI has acquired X in deal that values social media site at $33 billion",
                "description": "In a social media post on Friday, Elon Musk said his startup xAI has acquired his social media company X.",
                "url": "https://www.cnbc.com/2025/03/28/elon-musk-says-xai-has-acquired-x-in-deal-that-values-social-media-site-at-33-billion.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/108120013-17427449412025-03-22t224806z_102077630_rc2midapf7ci_rtrmadp_0_usa-trump.jpeg?v=1742745008&w=1920&h=1080",
                "publishedAt": "2025-03-28T21:49:35Z",
                "content": "Elon Musk said on Friday that his startup xAI has merged with X, his social network, in an all-stock transaction that values the artificial intelligence company at $80 billion and the social media co… [+1223 chars]"
                },
                {
                "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
                },
                "author": "Rebecca Bellan",
                "title": "‘Tesla Takedown’ protesters are planning a global day of action on March 29, and things might get ugly | TechCrunch",
                "description": "‘Tesla Takedown’ organizers have promised their biggest day of global action this weekend, encouraging thousands to protest outside Tesla showrooms,",
                "url": "https://techcrunch.com/2025/03/28/tesla-takedown-protesters-are-planning-a-global-day-of-action-on-march-29-and-things-might-get-ugly/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/03/GettyImages-2202072213.jpg?resize=1200,800",
                "publishedAt": "2025-03-28T21:48:59Z",
                "content": "Tesla Takedown organizers have promised their biggest day of global action this weekend, encouraging thousands to protest outside Tesla showrooms, dealerships, and even charging stations to peacefull… [+5754 chars]"
                },
                {
                "source": {
                "id": "cnn",
                "name": "CNN"
                },
                "author": "Lisa Eadicicco",
                "title": "Elon Musk says he sold X to his AI company | CNN Business",
                "description": "Elon Musk on Friday evening announced he has sold his social media company, X, to xAI, his artificial intelligence company, in a deal that values X at $33 billion, much less than he paid for it in 2022 but a significant rebound from its moribund valuation jus…",
                "url": "https://www.cnn.com/2025/03/28/business/elon-musk-sells-x-to-xai/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1567384593-1.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2025-03-28T21:43:35Z",
                "content": "Elon Musk on Friday evening announced he has sold his social media company, X, to xAI, his artificial intelligence company. xAI will pay $45 billion for X, slightly more than Musk paid for it in 2022… [+4597 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Hollywood Reporter"
                },
                "author": "Alex Weprin",
                "title": "X Sold to Elon Musk's AI Company XAI",
                "description": "The mogul said Friday that XAI had acquired the platform formerly known as Twitter in an all-stock transaction.",
                "url": "http://www.hollywoodreporter.com/business/business-news/x-sold-elon-musk-ai-company-xai-1236175325/",
                "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2025/03/GettyImages-2203478800.jpg?crop=0px%2C51px%2C7465px%2C4177px&resize=1440%2C810",
                "publishedAt": "2025-03-28T21:41:14Z",
                "content": "X, the social platform formerly known as Twitter, has been sold.\r\nElon Musk said Friday that xAI, his artificial intelligence company, had acquired X in an all-stock transaction that values xAI at $8… [+1133 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "observer.com",
                "title": "Is Tesla Truly Immune to Trump’s Auto Tariffs? Yes and No",
                "description": "It shouldn’t come as a surprise that Tesla (TSLA), helmed by the Trump administration’s “First Buddy” Elon Musk, has been largely spared by incoming tariffs on foreign-made automobiles. The electric carmaker’s localized manufacturing will be its saving grace …",
                "url": "https://biztoc.com/x/5b0f012a7dd5becc",
                "urlToImage": "https://biztoc.com/cdn/5b0f012a7dd5becc_s.webp",
                "publishedAt": "2025-03-28T21:40:11Z",
                "content": "It shouldnt come as a surprise that Tesla (TSLA), helmed by the Trump administrations First Buddy Elon Musk, has been largely spared by incoming tariffs on foreign-made automobiles. The electric carm… [+136 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Observer"
                },
                "author": "Alexandra Tremayne-Pengelly, Alexandra Tremayne-Pengelly",
                "title": "Is Tesla Truly Immune to Trump’s Auto Tariffs? Yes and No.",
                "description": "Tesla benefits from making its U.S. vehicles domestically. But the concept of a car made entirely with U.S. parts \"is a fictional tale,\" said an analyst.",
                "url": "https://observer.com/2025/03/tesla-trump-auto-tariff/",
                "urlToImage": "https://observer.com/wp-content/uploads/sites/2/2025/03/GettyImages-2206691913.jpg?quality=80",
                "publishedAt": "2025-03-28T21:38:45Z",
                "content": "Elon Musk attends a cabinet meeting held by U.S. President Donald Trump at the White House on March 24, 2025. Win McNamee/Getty Images\r\nIt shouldn’t come as a surprise that Tesla (TSLA), helmed by th… [+3604 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Japan Today"
                },
                "author": null,
                "title": "Musk deletes post promising he'd go to Wisconsin to deliver $2 million to Supreme Court race voters",
                "description": "Billionaire Elon Musk on Friday deleted a social media post in which he had announced plans to hold a rally in Wisconsin to “personally hand over” $2 million to a pair of voters who have already cast their ballots in the state’s hotly contested Supreme Court …",
                "url": "https://japantoday.com/category/world/musk-promises-to-go-to-wisconsin-to-personally-deliver-2-million-to-voters-in-supreme-court-race",
                "urlToImage": null,
                "publishedAt": "2025-03-28T21:37:46Z",
                "content": "Billionaire Elon Musk on Friday deleted a social media post in which he had announced plans to hold a rally in Wisconsin to personally hand over $2 million to a pair of voters who have already cast t… [+5511 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "CNA"
                },
                "author": null,
                "title": "Musk's social media firm X bought by his AI company, valued at $33 billion",
                "description": "Elon Musk's xAI has acquired X in a deal that values the social media platform at $33 billion and allows the value of his artificial intelligence firm to be shared with his co-investors in the company formerly known as Twitter.The deal could also help xAI's a…",
                "url": "https://www.channelnewsasia.com/business/musks-social-media-firm-x-bought-his-ai-company-valued-33-billion-5031611",
                "urlToImage": "https://dam.mediacorp.sg/image/upload/s--TplVB5C9--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2025-03-28t213342z_2_lynxnpel2r13p_rtroptp_3_xcorp-outages.jpg?itok=GoMVene2",
                "publishedAt": "2025-03-28T21:33:42Z",
                "content": "Elon Musk's xAI has acquired X in a deal that values the social media platform at $33 billion and allows the value of his artificial intelligence firm to be shared with his co-investors in the compan… [+3882 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "newsweek.com",
                "title": "Vandalized Tesla Cybertruck Investigated as Hate Crime in New York",
                "description": "The NYPD's Hate Crime Task Force is investigating an incident where two individuals carved a swastika on a Tesla in Brooklyn.",
                "url": "https://biztoc.com/x/3c3e218e862d9767",
                "urlToImage": "https://biztoc.com/cdn/928/og.png",
                "publishedAt": "2025-03-28T21:28:50Z",
                "content": "The NYPD's Hate Crime Task Force is investigating an incident where two individuals carved a swastika on a Tesla in Brooklyn.\r\nThis story appeared on newsweek.com, 2025-03-28 21:19:02."
                },
                {
                "source": {
                "id": null,
                "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Cathie Wood Reaffirms Tesla $2,600 Target Despite 39% Stock Decline",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_22f8e1d6-25f7-4ccd-a8b5-be1d19159d66",
                "urlToImage": null,
                "publishedAt": "2025-03-28T21:26:12Z",
                "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Wnd.com"
                },
                "author": "Bob Unruh",
                "title": "Elon Musk shines light on scams taxpayers have been sold",
                "description": "1 federal bureaucracy is burdening Americans with '700 different IT systems'",
                "url": "https://www.wnd.com/2025/03/elon-musk-shines-light-on-scams-taxpayers-have-been-sold/",
                "urlToImage": "https://www.wnd.com/wp-content/uploads/2025/03/elon-musk-bret-baier-interviewss.jpg",
                "publishedAt": "2025-03-28T21:21:25Z",
                "content": "Elon Musk, the owner of Tesla, Space X and X, has a fourth job as the chief of President Donald Trump’s Department of Government Efficiency, tasked with finding corruption, fraud, waste and criminal … [+3073 chars]"
                },
                {
                "source": {
                "id": "newsweek",
                "name": "Newsweek"
                },
                "author": "Jenna Sundel",
                "title": "Vandalized Tesla Cybertruck Investigated as Hate Crime in New York",
                "description": "The NYPD's Hate Crime Task Force is investigating an incident where two individuals carved a swastika on a Tesla in Brooklyn.",
                "url": "https://www.newsweek.com/tesla-cybertruck-vandalism-hate-crime-new-york-2052425",
                "urlToImage": "https://d.newsweek.com/en/full/2617219/new-york-tesla-attack.png",
                "publishedAt": "2025-03-28T21:19:02Z",
                "content": "The NYPD's Hate Crime Task Force is investigating an incident where two individuals carved a swastika on a Tesla Cybertruck in Brooklyn.\r\nPolice said the unidentified suspects allegedly \"carved the w… [+3135 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Rolling Stone"
                },
                "author": "Jonathan Zavaleta",
                "title": "Tesla Owners Can’t Stop Buying These Anti-Elon Musk Bumper Stickers",
                "description": "The owner of a popular online shop explains the viral success behind his \"I Bought This Before We Knew Elon Was Crazy\" bumper stickers.",
                "url": "http://www.rollingstone.com/product-recommendations/lifestyle/anti-elon-musk-tesla-stickers-magnets-1235303296/",
                "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2025/03/elon-stickers.png?w=900&h=600&crop=1",
                "publishedAt": "2025-03-28T21:15:21Z",
                "content": "If you purchase an independently reviewed product or service through a link on our website, Rolling Stone may receive an affiliate commission.\r\nBetween Tesla‘s autopilot barreling through “Wile E. Co… [+3371 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Securityaffairs.com"
                },
                "author": "Pierluigi Paganini",
                "title": "Crooks are reviving the Grandoreiro banking trojan",
                "description": "Grandoreiro Banking Trojan resurfaces, targeting users in Latin America and Europe in new phishing campaigns. Forcepoint X-Labs researchers warn of new phishing campaigns targeting Latin America and Europe in new phishing campaigns. The Trojan has been active…",
                "url": "https://securityaffairs.com/175964/malware/crooks-are-reviving-the-grandoreiro-banking-trojan.html",
                "urlToImage": "https://securityaffairs.com/wp-content/uploads/2025/03/image-55.png",
                "publishedAt": "2025-03-28T21:14:09Z",
                "content": "Crooks are reviving the Grandoreiro banking trojan\r\n | Russian authorities arrest three suspects behind Mamont Android banking trojan\r\n | Mozilla fixed critical Firefox vulnerability CVE-2025-2857\r\n … [+151358 chars]"
                },
                {
                "source": {
                "id": "msnbc",
                "name": "MSNBC"
                },
                "author": "Ja'han Jones",
                "title": "Ahead of Tesla protests, Musk threatens his company’s critics",
                "description": "During an interview with Fox News, Elon Musk, vowed to sic the federal government on his critics ahead of a weekend when Tesla protests are scheduled in more than 200 locations.",
                "url": "https://www.msnbc.com/top-stories/latest/tesla-protests-musk-threats-critics-rcna198628",
                "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250327-Bret-Baier-Elon-Musk-Doge-fox-news-ac-959p-a91d74.jpg",
                "publishedAt": "2025-03-28T21:13:27Z",
                "content": "It was like something youd expect from a villain in a comic book: The worlds richest man leering through the television screen, wagging his finger while threatening to weaponize the government up to … [+2596 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Gizmodo.com"
                },
                "author": "Matt Novak",
                "title": "Elon Musk Declares Intention to Bribe Voters (Again) to Attack U.S. Judicial System",
                "description": "The billionaire got away with it last time. Why not now?",
                "url": "https://gizmodo.com/elon-musk-declares-intention-to-bribe-voters-again-to-attack-u-s-judicial-system-2000582289",
                "urlToImage": "https://gizmodo.com/app/uploads/2024/10/elon-musk-awkward-jump.jpg",
                "publishedAt": "2025-03-28T21:05:19Z",
                "content": "Wisconsin voters will go to the polls next week to choose between candidates for the state’s Supreme Court. Elon Musk has spent $17 million so far to support the Republican-aligned candidate, accordi… [+4619 chars]"
                },
                {
                "source": {
                "id": "fox-news",
                "name": "Fox News"
                },
                "author": "Louis Casiano",
                "title": "Tim Walz calls for 'shadow government' to counter Trump admin; son dunks on former veep nominee",
                "description": "Minnesota Gov. Tim Walz on Friday called for a \"shadow government\" to counter what he said were the Trump administration's lies to Americans.",
                "url": "https://www.foxnews.com/politics/tim-walz-calls-shadow-government-counter-trump-admin",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/08/trump-walz.jpg",
                "publishedAt": "2025-03-28T21:04:52Z",
                "content": "Minnesota Gov. Tim Walz on Friday said a \"shadow government\" is needed to provide Americans with the truth about the Trump administration's actions. \r\nSpeaking at a town hall in Eau Claire, Wisconsin… [+1895 chars]"
                },
                {
                "source": {
                "id": "time",
                "name": "Time"
                },
                "author": "Solcyré Burga",
                "title": "A Car Buyer’s Guide to Getting a Good Deal in the Era of Trump’s Tariffs",
                "description": "“You don't need to panic,” Brian Moody, executive editor at Autotrader, tells TIME.",
                "url": "https://time.com/7272702/car-buyers-guide-trump-tariffs/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2025/03/GettyImages-2206590226.jpg?quality=85&w=1024&h=628&crop=1",
                "publishedAt": "2025-03-28T20:58:00Z",
                "content": "Americans were already concerned about inflation when President Donald Trump announced 25% tariffs on imported automobiles and car parts on Wednesday. An analysis by economist Arthur Laffer shows the… [+5792 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Crooksandliars.com"
                },
                "author": "Susie Madrak",
                "title": "Susan Collins Warns Trump He Doesn't Have A Line Item Veto",
                "description": "Susan Collins yesterday accused Trumpy Bear of illegally refusing to spend $2.9 billion approved by Congress, teaming with Democrats in an early salvo in the simmering struggle between Congress and the White House over which has the ultimate power over federa…",
                "url": "https://crooksandliars.com/2025/03/susan-collins-warns-trump-he-doesnt-have",
                "urlToImage": "https://crooksandliars.com/files/embeds/2025/03/64813.jpg",
                "publishedAt": "2025-03-28T20:54:53Z",
                "content": "Susan Collins yesterday accused Trumpy Bear of illegally refusing to spend $2.9 billion approved by Congress, teaming with Democrats in an early salvo in the simmering struggle between Congress and t… [+2173 chars]"
                },
                {
                "source": {
                "id": "newsweek",
                "name": "Newsweek"
                },
                "author": "Sonam Sheth",
                "title": "Elon Musk Accused of 'Blatant Felony' in Wisconsin With Voter Sweepstakes",
                "description": "Musk was accused of a \"blatant felony\" related to his effort to award money to people who vote in the Wisconsin Supreme Court election.",
                "url": "https://www.newsweek.com/elon-musk-wisconsin-supreme-court-2052250",
                "urlToImage": "https://d.newsweek.com/en/full/2616926/elon-musk.jpg",
                "publishedAt": "2025-03-28T20:52:37Z",
                "content": "The Democratic Party of Wisconsin is accusing SpaceX CEO Elon Musk of a \"blatant felony\" related to his plan to award money to people who have voted in the Wisconsin Supreme Court election.\r\nNewsweek… [+2643 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Smashingapps.com"
                },
                "author": "Team",
                "title": "What Is Vibe Coding and How to Start It? The AI-Driven Revolution in Software Development",
                "description": "This guide dives into what is Vibe Coding and how to start it, its transformative potential, and actionable steps to integrate it into your workflow.",
                "url": "https://www.smashingapps.com/what-is-vibe-coding-and-how-to-start-it/",
                "urlToImage": "https://www.smashingapps.com/wp-content/uploads/2025/03/What-Is-Vibe-Coding-and-How-to-Start-It.jpg",
                "publishedAt": "2025-03-28T20:49:31Z",
                "content": "Introduction: The Rise of AI-Assisted Development In 2025, the term “Vibe Coding” has surged into the tech lexicon, redefining how developers approach software creation. So, if you want to know what … [+7878 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Biztoc.com"
                },
                "author": "zerohedge.com",
                "title": "Tesla Takedown Revolutionaries Prepare Mobilization Nationwide",
                "description": "Tesla Takedown Revolutionaries Prepare Mobilization Nationwide\n \nFar-left revolutionaries behind the \"Tesla Takedown\" color revolution operation have identified dozens of Tesla targets nationwide and are preparing to mobilize far-left agitators aligned with t…",
                "url": "https://biztoc.com/x/15ae4077d4d420a7",
                "urlToImage": "https://biztoc.com/cdn/15ae4077d4d420a7_s.webp",
                "publishedAt": "2025-03-28T20:44:54Z",
                "content": "Tesla Takedown Revolutionaries Prepare Mobilization Nationwide\r\nFar-left revolutionaries behind the \"Tesla Takedown\" color revolution operation have identified dozens of Tesla targets nationwide and … [+146 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Memeorandum.com"
                },
                "author": null,
                "title": "Global anti-Elon Musk protests planned at nearly 200 Tesla showroom locations (Dara Kerr/The Guardian)",
                "description": "Dara Kerr / The Guardian:\nGlobal anti-Elon Musk protests planned at nearly 200 Tesla showroom locations  —  Tesla Takedown's Global Day of Action will be the largest in a series of demonstrations that began after Trump term 2.0  —  Hundreds of protests at Tes…",
                "url": "https://www.memeorandum.com/250328/p105",
                "urlToImage": "https://i.guim.co.uk/img/media/fefb806dd7072fc2050df7d8adc95e7b4f80d141/0_401_6000_3599/master/6000.jpg?width=300&dpr=2&s=none",
                "publishedAt": "2025-03-28T20:35:01Z",
                "content": "memeorandum is an auto-generated summary of the stories that US political commentators are discussing online right now.\r\nUnlike sister sites Techmeme and Mediagazer, it is not a human-edited news out… [+72 chars]"
                },
                {
                "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
                },
                "author": "TOI World Desk",
                "title": "Tesla under attack— and Elon Musk says he knows who's behind it",
                "description": "Elon Musk blames political rhetoric for rising attacks on Tesla owners and businesses, targeting individuals spreading anti-Tesla narratives. He accuses Democratic leaders of fueling resentment due to criticism of his role at the department of government effi…",
                "url": "https://timesofindia.indiatimes.com/world/us/tesla-under-attack-and-elon-musk-says-he-knows-whos-behind-it/articleshow/119670501.cms",
                "urlToImage": "https://static.toiimg.com/thumb/msid-119670534,width-1070,height-580,imgsize-1770146,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                "publishedAt": "2025-03-28T20:34:55Z",
                "content": "Tesla CEO Elon Musk has claimed that rising attacks on Tesla owners and businesses are being fueled by political rhetoric.In an interview with Fox News' Bret Baier on Special Report Thursday, Musk ar… [+2237 chars]"
                },
                {
                "source": {
                "id": null,
                "name": "Chrbutler.com"
                },
                "author": null,
                "title": "There's a psychological burden of digital life even heavier than distraction",
                "description": "When the iPhone was first introduced in 2007, the notion of an “everything device” was universally celebrated. A single object that could serve as",
                "url": "https://www.chrbutler.com/digital-echoes-and-unquiet-minds",
                "urlToImage": "https://cdn.blot.im/blog_a7eb7cf1ab024efcb17c380ef69c53f4/_thumbnails/32308456-2307-431a-a759-baa99b25247f/large.png",
                "publishedAt": "2025-03-28T20:29:32Z",
                "content": "When the iPhone was first introduced in 2007, the notion of an everything device was universally celebrated. A single object that could serve as phone, camera, music player, web browser, and so much … [+7918 chars]"
                },],
            loading : false,
        };
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>TOP Headlines</h2>
        <div className='row'>
            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                    <NewsUpdate title={element.title} newUrl={element.url} description={element.description?element.description.slice(0,100):"NO description available"} imageUrl={element.urlToImage}/>

                </div>
            })}
        </div>
      </div>
    )
  }
}

export default News
