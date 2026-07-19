with open('test_dashboard.html', 'r', encoding='utf-8') as f:
    s = f.read()

print('size:', len(s))
print('anime cards:', s.count('<div class="anime-card"'))
print('fav items:', s.count('#fbbf24'))
print('view-home:', s.count('id="view-home"'))
print('view-resume:', s.count('id="view-resume"'))
print('view-anime:', s.count('id="view-anime"'))
print('view-portfolio:', s.count('id="view-portfolio"'))
