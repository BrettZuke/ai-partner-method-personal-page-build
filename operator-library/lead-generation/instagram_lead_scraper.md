# Instagram Lead Scraper

## Goal
Find Instagram creators/coaches in the make-money-online / business niche with 10k–500k followers who have an existing offer (indicated by a link in bio). Output a qualified lead list to Google Sheets for manual DM outreach.

## Inputs
- **Hashtags**: List of hashtags to scrape (defaults to business/creator niche hashtags)
- **Follower range**: Min/max followers (default: 10k–500k)
- **Sheet ID**: Google Sheet ID to push results to (optional)

## Tools/Scripts
- Script: `execution/instagram_lead_scraper.py`
- Dependencies: `APIFY_API_TOKEN` in `.env`, `apify-client` Python package

## Process

### 1. Test Run First (always)
```bash
python3 execution/instagram_lead_scraper.py --test
```
- Scrapes 2 hashtags, 20 posts each (~40 profiles)
- Verify results look like real creator accounts before doing full run

### 2. Full Run
```bash
python3 execution/instagram_lead_scraper.py \
  --hashtags onlinecoach businesscoach coursecreator makemoneyonline digitalproducts \
  --posts_per_hashtag 200 \
  --min_followers 10000 \
  --max_followers 500000 \
  --sheet_id <GOOGLE_SHEET_ID>
```

### 3. Output columns in Google Sheet
| Column | Description |
|---|---|
| username | Instagram handle |
| full_name | Display name |
| followers | Follower count |
| bio | First 200 chars of bio |
| website | Link in bio (offer page signal) |
| is_business | Whether it's a business account |
| business_category | IG business category if set |
| instagram_url | Direct link to profile |
| scraped_at | Date scraped |

## Qualification Logic
A lead is "qualified" if:
1. Followers between 10,000 and 500,000
2. Has an external URL in their bio (= they have something to sell)

## Niche Hashtags (make money online / business)
Default set: `onlinecoach`, `businesscoach`, `coursecreator`, `makemoneyonline`, `digitalmarketing`, `onlinebusiness`, `passiveincome`, `entrepreneur`, `digitalproducts`, `infopreneur`

Add/remove hashtags based on what converts. Update this directive with findings.

## Setup Required
1. Add `APIFY_API_TOKEN` to `.env`
2. Create a Google Sheet and add the ID to `.env` as `GOOGLE_SHEETS_ID`, or pass `--sheet_id` directly
3. Make sure Google Service Account credentials are configured (for sheet writes)

## Apify Cost Estimate
- 100 posts × 10 hashtags = 1,000 posts scraped (Step 1)
- ~500–800 unique profiles to scrape (Step 2)
- Estimated Apify cost: ~$1–3 per full run
- Apify free tier: $5/month credit

## Edge Cases
- **Profile set to private**: Skipped automatically (no follower count returned)
- **Rate limiting**: Script adds 2s pause between profile batches
- **No website in bio**: Filtered out — these aren't qualified leads
- **Duplicate usernames across hashtags**: Deduplicated automatically in Step 1

## Learnings
*(Update this section as you run the scraper and discover patterns)*
- Which hashtags produce the best quality leads
- Which niches convert best for rev share deals
- Average follower count of signed clients
