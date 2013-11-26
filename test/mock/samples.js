module.exports.input = {
  'videos': [{
    'voteCount': 1809,
    'title': 'Le grand détournement - La classe Américaine : Vous savez parler comme',
    'sourceUrl': 'http://youtu.be/HiIcjL9FKX4',
    'source': 'youtube',
    'playerUrl': '/iframe-wrappers/youtube?id=HiIcjL9FKX4',
    'pictureUrl': '//img.youtube.com/vi/HiIcjL9FKX4/0.jpg',
    'id': 'le-grand-detournement-la-classe-americaine-vous-savez-parler-comme-ca-e',
    'duration': 42,
    'date': '2013-10-01T09:47:15.243Z',
    'links': {
      'user': 'donald',
      'shortlist': 'classe-americaine',
      'category': 'cinema'
    }
  }, {
    'voteCount': 1363,
    'title': 'Le Grand Détournement - La classe Américaine : Chips !',
    'sourceUrl': 'http://youtu.be/2OXAFqcQAfo',
    'source': 'youtube',
    'playerUrl': '/iframe-wrappers/youtube?id=2OXAFqcQAfo',
    'pictureUrl': '//img.youtube.com/vi/2OXAFqcQAfo/0.jpg',
    'id': 'le-grand-detournement-la-classe-americaine-chips',
    'duration': 81,
    'date': '2013-10-01T09:47:14.583Z',
    'links': {
      'user': 'michelle',
      'shortlist': 'classe-americaine',
      'category': 'cinema'
    }
  }, {
    'voteCount': 1,
    'title': 'La Classe Américaine - Trailer',
    'sourceUrl': 'http://youtu.be/rb9e4mnF-zM',
    'source': 'youtube',
    'playerUrl': '/iframe-wrappers/youtube?id=rb9e4mnF-zM',
    'pictureUrl': '//img.youtube.com/vi/rb9e4mnF-zM/0.jpg',
    'id': 'la-classe-americaine-trailer',
    'duration': 115,
    'date': '2013-10-01T09:47:15.755Z',
    'links': {
      'user': 'george',
      'shortlist': 'classe-americaine',
      'category': 'cinema'
    }
  }, {
    'voteCount': 1,
    'title': 'La Classe Américaine - Mexican Food',
    'sourceUrl': 'http://youtu.be/SBW7FohL65I',
    'source': 'youtube',
    'playerUrl': '/iframe-wrappers/youtube?id=SBW7FohL65I',
    'pictureUrl': '//img.youtube.com/vi/SBW7FohL65I/0.jpg',
    'id': 'la-classe-americaine-mexican-food',
    'duration': 113,
    'date': '2013-10-01T09:47:15.589Z',
    'links': {
      'user': 'rick',
      'shortlist': 'classe-americaine',
      'category': 'cinema'
    }
  }, {
    'voteCount': 1,
    'title': 'La Classe Américaine - La lettre',
    'sourceUrl': 'http://youtu.be/lWwJ6VrKRWY',
    'source': 'youtube',
    'playerUrl': '/iframe-wrappers/youtube?id=lWwJ6VrKRWY',
    'pictureUrl': '//img.youtube.com/vi/lWwJ6VrKRWY/0.jpg',
    'id': 'la-classe-americaine-la-lettre',
    'duration': 445,
    'date': '2013-10-01T09:47:15.243Z',
    'links': {
      'user': 'richard',
      'shortlist': 'classe-americaine',
      'category': 'cinema'
    }
  }, {
    'voteCount': 1,
    'title': 'Le grand détournement - La Classe américaine complet',
    'sourceUrl': 'http://youtu.be/ZDMUu_JTa3s',
    'source': 'youtube',
    'playerUrl': '/iframe-wrappers/youtube?id=ZDMUu_JTa3s',
    'pictureUrl': '//img.youtube.com/vi/ZDMUu_JTa3s/0.jpg',
    'id': 'le-grand-detournement-la-classe-americaine-complet',
    'duration': 4312,
    'date': '2013-10-01T09:47:15.224Z',
    'links': {
      'user': 'donald',
      'shortlist': 'classe-americaine',
      'category': 'cinema'
    }
  }],
  'users': [{
    'name': 'Donald',
    'id': 'donald'
  }, {
    'name': 'Michelle',
    'id': 'michelle'
  }, {
    'name': 'George',
    'id': 'george'
  }, {
    'name': 'Rick',
    'id': 'rick'
  }, {
    'name': 'Richard',
    'id': 'richard'
  }],
  'shortlists': [{
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  }],
  'categories': [{
    'name': 'Cinema',
    'id': 'cinema'
  }],
  'links': {
    'videos.user': {
      'href': '/engine/users/{videos.user}',
      'type': 'users'
    },
    'videos.shortlist': {
      'href': '/engine/shortlists/{videos.shortlist}',
      'type': 'shortlists'
    },
    'videos.category': {
      'href': '/engine/categories/{videos.category}',
      'type': 'categories'
    },
    'videos.vote': {
      'href': '/engine/videos/{videos.id}/votes'
    }
  }
};

module.exports.output = [{
  'voteCount': 1809,
  'title': 'Le grand détournement - La classe Américaine : Vous savez parler comme',
  'sourceUrl': 'http://youtu.be/HiIcjL9FKX4',
  'source': 'youtube',
  'playerUrl': '/iframe-wrappers/youtube?id=HiIcjL9FKX4',
  'pictureUrl': '//img.youtube.com/vi/HiIcjL9FKX4/0.jpg',
  'id': 'le-grand-detournement-la-classe-americaine-vous-savez-parler-comme-ca-e',
  'duration': 42,
  'date': '2013-10-01T09:47:15.243Z',
  'category': {
    'name': 'Cinema',
    'id': 'cinema'
  },
  'shortlist': {
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  },
  'user': {
    'id': 'donald',
    'name': 'Donald'
  },
  'links': {
    'user': '/engine/users/donald',
    'shortlist': '/engine/shortlists/classe-americaine',
    'category': '/engine/categories/cinema',
    'vote': '/engine/videos/le-grand-detournement-la-classe-americaine-vous-savez-parler-comme-ca-e/votes'
  },
  '_alreadyBBJSONAPIParsed': true
}, {
  'voteCount': 1363,
  'title': 'Le Grand Détournement - La classe Américaine : Chips !',
  'sourceUrl': 'http://youtu.be/2OXAFqcQAfo',
  'source': 'youtube',
  'playerUrl': '/iframe-wrappers/youtube?id=2OXAFqcQAfo',
  'pictureUrl': '//img.youtube.com/vi/2OXAFqcQAfo/0.jpg',
  'id': 'le-grand-detournement-la-classe-americaine-chips',
  'duration': 81,
  'date': '2013-10-01T09:47:14.583Z',
  'category': {
    'name': 'Cinema',
    'id': 'cinema'
  },
  'shortlist': {
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  },
  'user': {
    'id': 'michelle',
    'name': 'Michelle'
  },
  'links': {
    'user': '/engine/users/michelle',
    'shortlist': '/engine/shortlists/classe-americaine',
    'category': '/engine/categories/cinema',
    'vote': '/engine/videos/le-grand-detournement-la-classe-americaine-chips/votes'
  },
  '_alreadyBBJSONAPIParsed': true
}, {
  'voteCount': 1,
  'title': 'La Classe Américaine - Trailer',
  'sourceUrl': 'http://youtu.be/rb9e4mnF-zM',
  'source': 'youtube',
  'playerUrl': '/iframe-wrappers/youtube?id=rb9e4mnF-zM',
  'pictureUrl': '//img.youtube.com/vi/rb9e4mnF-zM/0.jpg',
  'id': 'la-classe-americaine-trailer',
  'duration': 115,
  'date': '2013-10-01T09:47:15.755Z',
  'category': {
    'name': 'Cinema',
    'id': 'cinema'
  },
  'shortlist': {
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  },
  'user': {
    'id': 'george',
    'name': 'George'
  },
  'links': {
    'user': '/engine/users/george',
    'shortlist': '/engine/shortlists/classe-americaine',
    'category': '/engine/categories/cinema',
    'vote': '/engine/videos/la-classe-americaine-trailer/votes'
  },
  '_alreadyBBJSONAPIParsed': true
}, {
  'voteCount': 1,
  'title': 'La Classe Américaine - Mexican Food',
  'sourceUrl': 'http://youtu.be/SBW7FohL65I',
  'source': 'youtube',
  'playerUrl': '/iframe-wrappers/youtube?id=SBW7FohL65I',
  'pictureUrl': '//img.youtube.com/vi/SBW7FohL65I/0.jpg',
  'id': 'la-classe-americaine-mexican-food',
  'duration': 113,
  'date': '2013-10-01T09:47:15.589Z',
  'category': {
    'name': 'Cinema',
    'id': 'cinema'
  },
  'shortlist': {
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  },
  'user': {
    'id': 'rick',
    'name': 'Rick'
  },
  'links': {
    'user': '/engine/users/rick',
    'shortlist': '/engine/shortlists/classe-americaine',
    'category': '/engine/categories/cinema',
    'vote': '/engine/videos/la-classe-americaine-mexican-food/votes'
  },
  '_alreadyBBJSONAPIParsed': true
}, {
  'voteCount': 1,
  'title': 'La Classe Américaine - La lettre',
  'sourceUrl': 'http://youtu.be/lWwJ6VrKRWY',
  'source': 'youtube',
  'playerUrl': '/iframe-wrappers/youtube?id=lWwJ6VrKRWY',
  'pictureUrl': '//img.youtube.com/vi/lWwJ6VrKRWY/0.jpg',
  'id': 'la-classe-americaine-la-lettre',
  'duration': 445,
  'date': '2013-10-01T09:47:15.243Z',
  'category': {
    'name': 'Cinema',
    'id': 'cinema'
  },
  'shortlist': {
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  },
  'user': {
    'id': 'richard',
    'name': 'Richard'
  },
  'links': {
    'user': '/engine/users/richard',
    'shortlist': '/engine/shortlists/classe-americaine',
    'category': '/engine/categories/cinema',
    'vote': '/engine/videos/la-classe-americaine-la-lettre/votes'
  },
  '_alreadyBBJSONAPIParsed': true
}, {
  'voteCount': 1,
  'title': 'Le grand détournement - La Classe américaine complet',
  'sourceUrl': 'http://youtu.be/ZDMUu_JTa3s',
  'source': 'youtube',
  'playerUrl': '/iframe-wrappers/youtube?id=ZDMUu_JTa3s',
  'pictureUrl': '//img.youtube.com/vi/ZDMUu_JTa3s/0.jpg',
  'id': 'le-grand-detournement-la-classe-americaine-complet',
  'duration': 4312,
  'date': '2013-10-01T09:47:15.224Z',
  'category': {
    'name': 'Cinema',
    'id': 'cinema'
  },
  'shortlist': {
    'name': 'La Classe Américaine',
    'id': 'classe-americaine'
  },
  'user': {
    'id': 'donald',
    'name': 'Donald'
  },
  'links': {
    'user': '/engine/users/donald',
    'shortlist': '/engine/shortlists/classe-americaine',
    'category': '/engine/categories/cinema',
    'vote': '/engine/videos/le-grand-detournement-la-classe-americaine-complet/votes'
  },
  '_alreadyBBJSONAPIParsed': true
}];