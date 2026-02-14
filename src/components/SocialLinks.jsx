import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/meghleela.official/' },
    { name: 'Facebook', icon: 'fa-brands fa-facebook', url: 'https://www.facebook.com/people/Megh-Leela/pfbid0SGSZYE7FnWTikCKcgUjovE42SGLgei5JKGY3ozwN6G4ykTeSBTdXwjon2ErpewJYl/' },
    { name: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@MeghLeelaOfficial2026' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter', url: 'https://x.com/meghleela?lang=en' },
  ];

  return (
    <div className="social-links">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={social.name}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

