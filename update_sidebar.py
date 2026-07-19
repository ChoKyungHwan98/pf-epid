import re

html_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\test_dashboard.html'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the CSS overrides for the sidebar inside <style>
new_css = """
    /* ==== 사이드바 확장/축소 로직 오버라이드 ==== */
    .os-sidebar {
        width: 240px !important;
        align-items: flex-start !important;
        padding: 24px 16px !important;
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease !important;
        z-index: 100 !important;
    }
    .os-sidebar.collapsed {
        width: 76px !important;
        align-items: center !important;
        padding: 24px 10px !important;
    }
    .os-sidebar.collapsed:hover {
        width: 240px !important;
        align-items: flex-start !important;
        padding: 24px 16px !important;
        box-shadow: 10px 0 30px rgba(0,0,0,0.05) !important;
    }

    .nav-text {
        transition: opacity 0.2s ease, max-width 0.2s ease;
        white-space: nowrap;
        opacity: 1;
        max-width: 200px;
        overflow: hidden;
    }
    .os-sidebar.collapsed:not(:hover) .nav-text {
        opacity: 0;
        max-width: 0;
        pointer-events: none;
    }

    .sidebar-profile {
        display: flex; align-items: center; gap: 12px; width: 100%;
        border-bottom: 1px solid var(--border); padding-bottom: 24px; margin-bottom: 16px;
        overflow: hidden;
    }
    .os-sidebar.collapsed:not(:hover) .sidebar-profile {
        justify-content: center;
        border-bottom: none;
        padding-bottom: 12px;
    }

    .os-nav-btn {
        width: 100% !important;
        justify-content: flex-start !important;
        padding: 0 16px !important;
        gap: 12px !important;
    }
    .os-sidebar.collapsed:not(:hover) .os-nav-btn {
        justify-content: center !important;
        padding: 0 !important;
    }
    .os-sidebar.collapsed:not(:hover) .os-nav-btn[title]:hover::after {
        display: block !important;
    }

    .os-body {
        margin-left: 240px !important;
        transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .os-body.collapsed {
        margin-left: 76px !important;
    }
    
    /* 애니메이션 이력 카드 hover 효과 세밀화 */
    .anime-card {
        background: var(--obsidian);
        border: 1px solid var(--border);
    }
    .anime-card:hover {
        border-color: var(--ice);
        box-shadow: 0 4px 12px var(--ice-glow);
    }
"""

# Replace the existing internal CSS styles that we wrote previously
content = re.sub(
    r'(<style>\s*/\* 배경 이미지를 위한 인라인 스타일.*?)(?=</style>)',
    r'\1' + new_css,
    content,
    flags=re.DOTALL
)

# Replace any old `.os-body { margin-left: ...` blocks that might still be in the <style>
content = re.sub(r'\.os-sidebar\.collapsed:not\(:hover\) \.nav-text \{[^}]+\}', '', content)
content = re.sub(r'\.os-body \{[^}]+\}', '', content)
content = re.sub(r'\.os-body\.collapsed \{[^}]+\}', '', content)

# 2. Update the profile HTML to use the .sidebar-profile class
content = content.replace(
    '<div style="display:flex; align-items:center; gap:12px; border-bottom: 1px solid var(--border); padding-bottom: 24px; margin-bottom: 16px; width:100%; overflow: hidden;">',
    '<div class="sidebar-profile">'
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Sidebar layout and CSS rules.")
