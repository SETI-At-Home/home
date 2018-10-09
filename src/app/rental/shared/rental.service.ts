import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'Skopje',
      street: 'Partizanska 31',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017',
    },
    {
      id: '2',
      title: 'Central Apartment 2',
      city: 'Kumanovo',
      street: 'Tode Mendol 31',
      category: 'House',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 7,
      description: 'Very nice house',
      dailyRate: 54,
      shared: false,
      createdAt: '24/12/2015',
    },
    {
      id: '3',
      title: 'Central Apartment 3',
      city: 'Ohrid',
      street: 'Samoilska 4',
      category: 'House',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'Very nice house',
      dailyRate: 34,
      shared: true,
      createdAt: '24/12/2017',
    },
    {
      id: '4',
      title: 'Central Apartment 4',
      city: 'Bitola',
      street: 'Bitolska 56',
      category: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 2,
      description: 'Very nice apartment',
      dailyRate: 14,
      shared: false,
      createdAt: '24/12/2011',
    },
  ];

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>(observer => {
      setTimeout(() => {
        const foundRental = this.rentals.find(rental => {
          return rental.id === rentalId;
        });
        observer.next(foundRental);
      }, 500);
    });
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    });
  }
}
