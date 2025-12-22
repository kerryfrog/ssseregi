import os
import re

posts_dir = '_posts'
# Corrected regex for YYYY-MM-DD format, allowing optional quotes.
date_pattern = re.compile(r"^\s*['"]?\d{4}-\d{2}-\d{2}['"]?\s*$")
date_key_pattern = re.compile(r"^\s*date\s*:")

print("날짜 형식이 잘못된 파일을 찾습니다...")
found_issue = False

for filename in os.listdir(posts_dir):
    if not filename.endswith('.md'):
        continue

    filepath = os.path.join(posts_dir, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            in_frontmatter = False
            for line in f:
                stripped_line = line.strip()
                if stripped_line == '---':
                    if not in_frontmatter:
                        in_frontmatter = True
                    else:
                        break  # End of frontmatter

                if in_frontmatter and date_key_pattern.match(stripped_line):
                    date_value = stripped_line.split(':', 1)[1].strip()
                    if not date_pattern.match(date_value):
                        print(f"  - 파일: {filename}, 잘못된 날짜 형식 발견: {date_value}")
                        found_issue = True
                    break
    except Exception as e:
        print(f"  - 파일 처리 오류: {filename}, 오류: {e}")
        found_issue = True

if not found_issue:
    print("모든 파일의 날짜 형식이 정상인 것으로 보입니다.")

print("검사 완료.")
